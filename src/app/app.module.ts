import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { ViewComponent } from './features/view/view.component';
import { EditComponent } from './features/edit/edit.component';
import { FieldComponent } from './shared/field/field.component';

import { DataService } from "./services/data.service";
import { RictionaryService } from "./services/rictionary.service";
import { SpellComponent } from './features/spell/spell.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    FieldComponent,
    SpellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService, RictionaryService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
