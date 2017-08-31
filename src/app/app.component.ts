import { Component, OnInit } from '@angular/core';
import { DataService } from "./services/data.service";
import { RictionaryService, Rictionary } from "./services/rictionary.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <a class="navbar-brand" routerLink="/">
        <span class="text-primary">Rictionary</span>
      </a>
    </nav>

    <div class="container pt-5">

      <div class="mt-3">
        
        <div class="row justify-content-center">
          <div class="col-6">

            <form [formGroup]="form">
                <div class="form-group">
                  <select class="form-control" formControlName="id">
                    <option *ngFor="let item of list" [ngValue]="item.RictionaryID">{{item.RictionaryName}}<option>
                  </select>
                </div>
            </form>

          </div>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-6">
            <app-view [rictionary]="rictionary"></app-view>
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
  
  list: { RictionaryID: number, RictionaryName: string }[];
  form: FormGroup = this.fb.group({ id: null });
  rictionary: Rictionary;

  loadRictionaryData(id: number){
    this.rictionaryService.get(id).subscribe((rictionary: Rictionary) => {
      this.rictionary = rictionary;
    });
  }

  ngOnInit(): void {
    this.rictionaryService.list().subscribe(response => {
      this.list = response;
      
      this.form.controls.id.valueChanges.subscribe((value: any) => {
        this.loadRictionaryData(value);
      });

      this.form.controls.id.setValue(this.list[0].RictionaryID);
    });
  }

}
