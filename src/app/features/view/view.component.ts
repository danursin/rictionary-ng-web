import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { RictionaryService, Rictionary } from "../../services/rictionary.service";

@Component({
  selector: 'app-view',
  template: `<pre>{{rictionary | json}}</pre>`
})
export class ViewComponent implements OnInit, OnChanges {
  
  @Input() rictionary: number;
  constructor(private rictionaryService: RictionaryService) { }

  ngOnChanges(changes: SimpleChanges): void { 

  }

  ngOnInit(): void {

  }

}
