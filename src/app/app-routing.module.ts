import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ReportsComponent } from './reports/reports.component';
import { SaleComponent } from './sale/sale.component';
import { SearchComponent } from './search/search.component';
import { VendorComponent } from './vendor/vendor.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
 {path:'item',component:ItemComponent},
  {path:'login',component:LoginComponent},
  {path:'purchase',component:PurchaseComponent},
  {path:'register',component:RegisterComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'reports', component: ReportsComponent},
  {path:'search', component: SearchComponent},
  {path:'customer', component: CustomerComponent},
  {path:'vendor',component:VendorComponent},
  {path:'sale',component:SaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ReportsComponent, ItemComponent,
  LoginComponent,PurchaseComponent,RegisterComponent,WelcomeComponent, SearchComponent, CustomerComponent,VendorComponent,SaleComponent]
