import { Transaction } from "../transaction/transaction.module";

export interface AccountDto {
  accountId:number;
	
	customerId:string;

	currentBalance:DoubleRange;
	
  accountType:string;
	
  ownerName:string;
//   private transient List<Transaction> transactions = new ArrayList<Transaction>();
  transactions:Transaction[]
}
export class Account{
 public accountId:number;
	
 public customerId:string;

 public	currentBalance:DoubleRange;
	
 public accountType:string;
	
 public ownerName:string;
 public transactions:Transaction[]
 constructor(accountId:number,
	
	customerId:string,

	currentBalance:DoubleRange,
	
  accountType:string,
	
  ownerName:string,transactions:Transaction[]){
  this.accountId=accountId;
  this.customerId=customerId;
  this.currentBalance=currentBalance;
  this.accountType=accountType;
  this.ownerName=ownerName;
  this.transactions=transactions
  }
 }