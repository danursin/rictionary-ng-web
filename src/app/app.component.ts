import { Component, OnInit } from '@angular/core';
import { DataService } from "./services/data.service";
import { RictionaryService } from "./services/rictionary.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-md navbar-light bg-light py-0">
      <a class="navbar-brand" href="#">
        <span class="text-primary">Rictionary</span>
      </a>
      <div class="navbar flex-row mr-auto">
        <div class="nav-item">
          <a class="nav-link text-primary" (click)="setMode('view')" [ngClass]="{ 'border border-primary': mode === 'view'}" href="#">
            <i class="fa fa-list"></i>
            <span class="d-none d-md-inline">View</span>
          </a>
        </div>
        <div class="nav-item">
          <a class="nav-link text-primary" (click)="setMode('spell')" [ngClass]="{'border border-primary': mode === 'spell'}" href="#">
            <i class="fa fa-commenting-o"></i>
            <span class="d-none d-md-inline">Spell</span>
          </a>
        </div>
      </div>
    </nav>

    <div class="container pt-2">

      <div class="mt-3">
        
        <div class="row justify-content-center">
          <div class="col-md-6">

            <form [formGroup]="form">
                <div class="form-group">
                  <select class="form-control form-control-sm" formControlName="id">
                    <option *ngFor="let item of list" [ngValue]="item.RictionaryID">{{item.RictionaryName}}<option>
                  </select>
                </div>
            </form>

          </div>
        </div>
        
        <em class="text-muted text-center d-block" *ngIf="isLoading">
          <i class="fa fa-cog fa-spin"></i> Loading...
        </em>

        <div class="row justify-content-center">
          <div class="col-md-6">
            <app-view [rictionary]="rictionary" *ngIf="mode === 'view'"></app-view>
            <app-spell [rictionary]="rictionary" *ngIf="mode ===  'spell'"></app-spell>
            <!--<app-edit [rictionary]="rictionary" *ngIf="mode === 'edit'"></app-edit>-->
          </div>
        </div>
      </div>

    </div>
  `
})
export class AppComponent implements OnInit {

  constructor(
    private rictionaryService: RictionaryService,
    private fb: FormBuilder
  ) { }
  
  isLoading: boolean = true;
  mode: string = "view";
  list: { RictionaryID: number, RictionaryName: string }[];

  form: FormGroup = this.fb.group({ 
    id: [{value:''}]
  });

  rictionary: Rictionary;

  loadRictionaryData(id: number){
    this.isLoading = true;
    this.rictionaryService.get(id).subscribe((rictionary: Rictionary) => {
      this.rictionary = rictionary;
      this.isLoading = false;
    });
  }

  setMode(mode: string){
    this.mode = mode;
  }

  initForm(){
    this.form.controls.id.valueChanges.subscribe((value: any) => {
      this.loadRictionaryData(value);
    });

    this.form.controls.id.setValue(this.list[0].RictionaryID);
  }

  ngOnInit(): void {
    this.rictionaryService.list().subscribe(response => {
      this.list = response;
      this.initForm();
    });
  }

}
