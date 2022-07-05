import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Account } from "../models/account/account.module";

@Injectable({
  providedIn: "root",
})
export class RulesService {
  constructor(private http: HttpClient) {}

  evaluateMinBal() {
   
  }
  getServiceCharges(){
      return this.http.get<Account>(
      'http://localhost:8086/account-ms/getAccounts/10054546'
      );
  }



}