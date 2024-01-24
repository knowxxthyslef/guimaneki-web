import { HomeComponent } from '../home/home.component';
import { ManekiComponent } from '../maneki/maneki.component';
import { NAV } from './global';
import { Routes } from '@angular/router';



export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: '',
      component: ManekiComponent,
      outlet: 'menu',
    }]
  },
  {
    path: '**',
    redirectTo: NAV.login
  }

];



