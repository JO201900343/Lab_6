import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  result = ' not a prime number';
  prime = 0;
  count = 0;
  i = 1;
  title = 'Calculator';
  isPrime() {
    this.prime = 1;
    this.result = ' is a prime';
  }
}
