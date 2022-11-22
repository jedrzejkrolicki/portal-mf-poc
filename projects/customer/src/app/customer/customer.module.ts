import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './policy-search/customer-view.component';
import { RouterModule } from '@angular/router';
import {CUSTOMER_ROUTES} from './customer.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOMER_ROUTES)
  ],
  declarations: [
    CustomerViewComponent
  ]
})
export class CustomerModule { }
