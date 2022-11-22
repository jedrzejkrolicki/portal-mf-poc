import { Routes } from '@angular/router';
import { PolicyViewComponent } from './policy-view/policy-view.component';

export const POLICY_ROUTES: Routes = [
    {
      path: 'policy-view/:id',
      component: PolicyViewComponent
    }
];
