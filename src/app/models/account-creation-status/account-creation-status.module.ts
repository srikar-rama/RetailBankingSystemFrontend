export class AccountCreationStatus {
  accountId: number;
  message: string;
  constructor(accountId: number, message: string){
    this.accountId=accountId;
    this.message=message;
  }
}
