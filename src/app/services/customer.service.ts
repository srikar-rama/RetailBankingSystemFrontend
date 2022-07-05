import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomerEntity } from "../models/customer-entity/customer-entity.module";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomer(userid: string) {
    return this.http.get<CustomerEntity>(
      'http://localhost:8085/customer/getCustomerDetails/'+userid
    );
  }

  createCustomer(
    userid: string,
    username: string,
    password: string,
    dateOfBirth: string,
    pan: string,
    address: string
  ) {
    return this.http.post<CustomerEntity>(
      `http://localhost:8085/customer/createCustomer`,
      { userid, username, password, dateOfBirth, pan, address }
    );
  }

  getAllCustomers() {
    return this.http.get<CustomerEntity[]> (
      `http://localhost:8085/customer/getCustomers`
    );
  }
}