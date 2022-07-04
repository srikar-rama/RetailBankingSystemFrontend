import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { CreateCustomerComponent } from './views/create-customer/create-customer.component';
import { CustomerDashboardComponent } from './views/customer-dashboard/customer-dashboard.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ViewCustomerComponent } from './views/view-customer/view-customer.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    CreateCustomerComponent,
    CustomerDashboardComponent,
    DashboardComponent,
    ViewCustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
