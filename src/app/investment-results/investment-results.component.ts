import { Component, inject } from '@angular/core';
import { InputService } from '../user-input/input.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private InputService = inject(InputService);

  get getResults(){
    return this.InputService.getDataResults();;
  }
}
