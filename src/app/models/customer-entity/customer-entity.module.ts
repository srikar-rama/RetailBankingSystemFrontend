import { Account } from "../account/account.module";

export interface CustomerEntityDto{
  userid:string;
  username:string;
  passoword:string;
  dateOfBirth:Date;
  pan:string;
  address:string;
  accounts:Account[]
  //private List<Account> accounts = new ArrayList<Account>();
}
export class CustomerEntity{
  userid:string;
  username:string;
  password:string;
  dateOfBirth:Date;
  pan:string;
  address:string;
  accounts:Account[]
  constructor(userid:string,
    username:string,
    password:string,
    dateOfBirth:Date,
    pan:string,
    address:string,
    accounts:Account[]){
      this.userid=userid;
      this.username=username;
      this.password=password;
      this.dateOfBirth=dateOfBirth;
      this.pan=pan;
      this.address=address;
      this.accounts=accounts

  }
}