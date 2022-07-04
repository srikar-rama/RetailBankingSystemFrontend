export interface AccountInputDto{
  accountId: number;
  amount:DoubleRange
}
export class AccountInput{
  public accountId:number;
  public amount:DoubleRange;
  constructor(accountId:number,amount:DoubleRange){
    this.accountId=accountId;
    this.amount=amount
  }
}