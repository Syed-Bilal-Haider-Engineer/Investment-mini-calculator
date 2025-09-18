import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputService } from './input.service';

@Component({
  selector: 'app-user-input',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  enteredInitialInvestment = signal<number>(0);
  enteredAnnualInvestment = signal<number>(0);
  enteredExpectedReturn = signal<number>(0);
  enteredDuration = signal<number>(0);

  private inputService = inject(InputService);

  onSubmit() {
    if (
      this.enteredInitialInvestment() > 0 &&
      this.enteredAnnualInvestment() > 0 &&
      this.enteredExpectedReturn() > 0 &&
      this.enteredDuration() > 0
    ) {
      this.inputService.calculateInvestmentResults({
        initialInvestment: this.enteredInitialInvestment(),
        annualInvestment: this.enteredAnnualInvestment(),
        expectedReturn: this.enteredExpectedReturn(),
        duration: this.enteredDuration(),
      });
    } else {
      alert("Please enter valid values in all fields.")
    }
  }
}
