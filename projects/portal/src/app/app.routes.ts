import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {AppModule} from '../../../policy/src/app/app.module';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },


    // Your route here:

    // {
    //   path: 'flights',
    //   loadChildren: () => import('mfe1/Module').then(m => m.PolicyModule)
    // },
  {
    path: 'search',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'search',
        exposedModule: './Module'
      })
        .then(m => m.SearchModule)
  },  {
    path: 'policy',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'policy',
        exposedModule: './Module'
      })
        .then(m => m.PolicyModule)
  }
  ,  {
    path: 'customer',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'customer',
        exposedModule: './Module'
      })
        .then(m => m.CustomerModule)
  },


  {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

