import { AccountInput } from "../account-input/account-input.module";

export interface TransactionInputDto{
  sourceAccount:AccountInput;
  targetAccount:AccountInput;
  amount:DoubleRange;
  reference:string
}
export class TransactionInput{
  sourceAccount:AccountInput;
  targetAccount:AccountInput;
  amount:DoubleRange;
  reference:string
  constructor(sourceAccount:AccountInput,
    targetAccount:AccountInput,
    amount:DoubleRange,
    reference:string){
      this.sourceAccount=sourceAccount;
      this.targetAccount=targetAccount;
      this.amount=amount;
      this.reference=reference
    }
}