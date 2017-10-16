import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
  
  @Input() rictionary: Rictionary;

  ngOnInit(): void {

  }

}
