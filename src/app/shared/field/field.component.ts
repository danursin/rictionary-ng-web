import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  template: `
    <div class="row">
      <div class="col-2">
        <ng-content select="app-field-left"></ng-content>
      </div>
      <div class="col-8">
        <ng-content select="app-field-center"></ng-content>
      </div>
      <div class="col-2">
        <ng-content select="app-field-right"></ng-content>
      </div>
    </div>
  `
})
export class FieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
