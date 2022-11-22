import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicySearchComponent } from './policy-search/policy-search.component';
import { RouterModule } from '@angular/router';
import { SEARCH_ROUTES } from './search.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SEARCH_ROUTES)
  ],
  declarations: [
    PolicySearchComponent
  ]
})
export class SearchModule { }
