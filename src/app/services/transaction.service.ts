import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Account } from "../models/account/account.module";
import { Transaction } from "../models/transaction/transaction.module";
import { AccountInput } from "../models/account-input/account-input.module";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  getTransaction(accountid: number) {
    return this.http.get<Transaction[]>(
      'http://localhost:8087/transaction-ms/getAllTransByAccId/'+accountid
    );
  }

  withdarw(accountId: number, amount: number) {
    return this.http.post<Account>(
      `http://localhost:8086/account-ms/withdraw`,
      { accountId, amount }
    );
  }

  deposit(accountId: number, amount: number) {
    return this.http.post<Account>(`http://localhost:8086/account-ms/deposit`, {
      accountId,
      amount,
    });
  }

  transfer(sourceAccount: AccountInput  , targetAccount: AccountInput, amount: number) {
    var amount1 = 1000;
    var amount2 = 1000;

    return this.http.post<Boolean>(
      `http://localhost:8087/transaction-ms/transactions`,
      {
        sourceAccount: sourceAccount,
        targetAccount: targetAccount,
        amount: amount,
        reference: "transfer"
      }
    );
  }
}