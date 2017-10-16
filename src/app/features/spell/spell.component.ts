import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html'
})
export class SpellComponent implements OnInit, OnChanges {
  
  @Input() rictionary: Rictionary;

  constructor(private fb: FormBuilder) { }

  form: FormGroup = this.fb.group({
    word: ""
  });

  spelling: { character: string, phrase: string}[];

  getRictionaryValue(letter: string){
    const found: LetterValuePair = this.rictionary.Values.find(item => item.letter.toLowerCase() === letter.toLowerCase());
    if(found){
      return found.value;
    }
    return null;
  }

  updateSpelling(word: string){
    this.spelling = (word || "").split("").map(character => {
      let phrase: string;
      if(character === " "){
        phrase = "";
      }
      else if(/[a-zA-Z]/.test(character)) {
        phrase = `${character} as in ${this.getRictionaryValue(character)}`;
      }
      else if(/[0-9]/.test(character)){
        phrase = `The number ${character}`;
      }
      else{ 
        phrase =  `The ${character} character`
      };

      return {
        character: character.toUpperCase(),
        phrase: phrase
      };
    });
  }

  initForm(){
    this.form.valueChanges.subscribe(value => {
      this.updateSpelling(value.word);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateSpelling(this.form.value.word)
  }

  ngOnInit() {
    this.initForm();
  }

}
