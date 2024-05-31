export interface CalculatorInput {
   initialInvestment: number;
   annualInvestment: number;
   expectedReturn: number;
   duration: number;
}

export interface CalculatorResult {
   year: number;
   interest: number;
   valueEndOfYear: number;
   annualInvestment: number;
   totalInterest: number;
   totalAmountInvested: number;
}