export interface TransactionDto{
  id:number;
  sourceAccountId:number;
  sourceOwnerName:string;
  targetAccountId:number;
  targetOwnerName:string;
  amount:DoubleRange,
  initiationDate:Date;
  reference:string
}
export class Transaction{
  id:number;
  sourceAccountId:number;
  sourceOwnerName:string;
  targetAccountId:number;
  targetOwnerName:string;
  amount:DoubleRange;
  initiationDate:Date;
  reference:string
  constructor(  id:number,
    sourceAccountId:number,
    sourceOwnerName:string,
    targetAccountId:number,
    targetOwnerName:string,
    amount:DoubleRange,
    initiationDate:Date,
    reference:string
  ){
    this.id=id;
    this.sourceAccountId=sourceAccountId;
    this.sourceOwnerName=sourceOwnerName;
    this.targetAccountId=targetAccountId;
    this.targetOwnerName=targetOwnerName;
    this.amount=amount;
    this.initiationDate=initiationDate;
    this.reference=reference
    

  }
}