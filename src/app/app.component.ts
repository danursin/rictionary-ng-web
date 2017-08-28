import { Component } from '@angular/core';
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">
        <span class="text-primary">Rictionary</span>
      </a>
    </nav>

    <div class="container pt-5">

      <div class="mt-3">
        
        <router-outlet></router-outlet>

      </div>

    </div>
  `
})
export class AppComponent {
  constructor(private dataService: DataService){}

  



}
