import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from "./services/data.service";
import { HomeComponent } from './features/home/home.component';
import { ViewComponent } from './features/view/view.component';
import { EditComponent } from './features/edit/edit.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "view", component: ViewComponent },
  { path: "edit", component: EditComponent },
  { path: "", redirectTo: "/home", pathMatch: "full"  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
