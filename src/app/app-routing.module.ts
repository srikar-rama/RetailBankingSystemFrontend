import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { CreateCustomerComponent } from './views/create-customer/create-customer.component';
import { CustomerDashboardComponent } from './views/customer-dashboard/customer-dashboard.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ViewCustomerComponent } from './views/view-customer/view-customer.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'createAccount',component:CreateAccountComponent},
  {path:'createCustomer',component:CreateCustomerComponent},
  {path:'customerDashboard',component:CustomerDashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'viewCustomer',component:ViewCustomerComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,CreateAccountComponent,CreateCustomerComponent,CustomerDashboardComponent,LoginComponent,ViewCustomerComponent]