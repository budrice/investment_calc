import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  private calculatorService = inject(CalculatorService);
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {
    const initialInvestment = +this.initialInvestment();
    const annualInvestment = +this.annualInvestment();
    const expectedReturn = +this.expectedReturn();
    const duration = +this.duration();

    this.calculatorService.calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration
    });

    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
    
  }
}
