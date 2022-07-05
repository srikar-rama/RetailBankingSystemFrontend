export class RulesInputModule { 
  public accountId:number;
	public currentBalance:DoubleRange;
	public amount:DoubleRange;
  constructor(accountId:number,currentBalance:DoubleRange,amount:DoubleRange){
    this.accountId=accountId;
    this.currentBalance=currentBalance;
    this.amount=amount
  }
}
