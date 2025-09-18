import { Component, inject, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InputService } from './user-input/input.service';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('investment-mini-calculator');
  private inputService = inject(InputService);
  get getResults() {
    return this.inputService.getDataResults();
}
}
