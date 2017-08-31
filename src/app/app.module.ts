import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from "./services/data.service";
import { ViewComponent } from './features/view/view.component';
import { RictionaryService } from "./services/rictionary.service";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService, RictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
