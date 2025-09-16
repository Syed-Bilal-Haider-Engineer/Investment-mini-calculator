import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  enteredInitialInvestment: number = 1000;
  enteredAnnualInvestment: number = 100;
  enteredExpectedReturn: number = 7;
  enteredDuration: number = 10;
}
