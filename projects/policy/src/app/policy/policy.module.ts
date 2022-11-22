import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyViewComponent } from './policy-view/policy-view.component';
import { RouterModule } from '@angular/router';
import { POLICY_ROUTES } from './policy.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(POLICY_ROUTES),
    HttpClientModule
  ],
  declarations: [
    PolicyViewComponent
  ]
})
export class PolicyModule { }
