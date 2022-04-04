import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includesLetters = false;
  includesNumbers = false;
  includesSymbols = false;
  password = '';

  onLengthChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
 
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  } 

  useLetters() {
    this.includesLetters = !this.includesLetters;
  }
  useNumbers() {
    this.includesNumbers = !this.includesNumbers;
  }
  useSymbols() {
    this.includesSymbols = !this.includesSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^^&*()';
    let validChars = '';

    if(this.includesLetters) {
      validChars += letters;
    }
    if(this.includesNumbers) {
      validChars += numbers;
    }
    if(this.includesSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0; i<this.length; i++) {
      const index  = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;

    
  }
}
