import { Component, Input, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { type CalculatorResult } from '../calculator.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input() results?: CalculatorResult[];
  results = input<CalculatorResult[]>();
}
