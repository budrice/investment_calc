import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { type CalculatorResult } from '../calculator.model';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private calculatorService = inject(CalculatorService);
  results = computed(() => this.calculatorService.results());
  year = new Date().getFullYear();
}
