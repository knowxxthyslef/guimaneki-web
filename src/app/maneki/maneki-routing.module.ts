import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManekiComponent } from './maneki.component';

const routes: Routes = [
  {
    path: '',
    component: ManekiComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManekiRoutingModule { }
