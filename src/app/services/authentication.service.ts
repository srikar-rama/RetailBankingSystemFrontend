﻿import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { AppUser } from "../models/app-user/app-user.module";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<AppUser>;
  public currentUser: Observable<AppUser>;
  
  constructor(private http: HttpClient) {
    //get user nullified
    this.currentUserSubject = new BehaviorSubject<AppUser>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AppUser {
    return this.currentUserSubject.value;
  }

  login(userid: string, password: string) {
    return this.http
      .post<any>(`http://localhost:8084/auth-ms/login`, { userid, password })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log(user);
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    //get user nullified
    this.currentUserSubject = new BehaviorSubject<AppUser>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }
}