import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';
import { CalculatorService } from './calculator.service';
import { type CalculatorInput, type CalculatorResult } from './calculator.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    InvestmentResultsComponent,
    UserInputComponent,
  ],
})
export class AppComponent {
  private calculatorService = inject(CalculatorService);
  results = signal<CalculatorResult[] | undefined>(undefined);

  onCalculate(data: CalculatorInput) {
    this.calculatorService
      .calculateInvestmentResults(data)
      .then((results: CalculatorResult[]) => {
        this.results.set(results);
      });
  }
}
