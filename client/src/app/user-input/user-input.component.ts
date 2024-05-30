import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestmentAmount = 0;
  annualInvestmentAmount = 0;
  expectedReturnRate = 5;
  duration = 10;

  onSubmit() {
    console.log(this.initialInvestmentAmount);
    console.log(this.annualInvestmentAmount);
    console.log(this.expectedReturnRate);
    console.log(this.duration);
  }
}
