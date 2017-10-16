import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  @Input() rictionary: Rictionary;

  constructor(private fb: FormBuilder) { }

  form: FormGroup = this.fb.group({
    RictionaryID: null,
    RictionaryName: null,
    CreatedDate: null,
    CreatedBy: null,
    UpdatedDate: null,
    UpdatedBy: null,
    Values: this.fb.array([])
  });

  initForm(rictionary: Rictionary){
    this.form.patchValue(rictionary);
  }

  ngOnChanges(changes: SimpleChanges): void { 
    if(changes.rictionary && this.rictionary){
      this.initForm(this.rictionary);
    }
  }

  ngOnInit() {
  }

}
