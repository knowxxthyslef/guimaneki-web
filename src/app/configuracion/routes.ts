import { NAV } from './global';
import { Routes } from '@angular/router';



export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/maneki/maneki.module').then(m => m.ManekiModule)
  },
 /*  {
    path: 'home',
    loadChildren: () => import('src/app/smns/autorizacion/autorizacion.module').then(m => m.AutorizacionModule)
  }, */
  {
    path: '**',
    redirectTo: NAV.login
  }

];



