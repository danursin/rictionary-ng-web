import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FieldComponent
  ],
  exports: [
    FieldComponent
  ]
})
export class SharedModule { }
