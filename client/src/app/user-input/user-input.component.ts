import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<{ initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number }>();
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 5;
  duration = 10;

  onSubmit() {
    const initialInvestment = +this.initialInvestment;
    const annualInvestment = +this.annualInvestment;
    const expectedReturn = +this.expectedReturn;
    const duration = +this.duration;

    this.calculate.emit({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration
    });


  }
}
