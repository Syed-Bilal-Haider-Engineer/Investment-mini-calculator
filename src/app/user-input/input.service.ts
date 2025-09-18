import { Injectable, signal } from "@angular/core";
import type { AnnualData, InputData } from "./input.model";

@Injectable({
  providedIn: 'root',
})
export class InputService {
  results = signal<AnnualData[]>([]);

  calculateInvestmentResults(
   InputData:InputData
  ) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = InputData;
    const annualData: any[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = Math.round(investmentValue * (expectedReturn / 100));
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalInvestment: initialInvestment + annualInvestment * year
      });
    }
    this.results.set(annualData);
    return annualData;
  }

  getDataResults() {
    return this.results;
  }
}
