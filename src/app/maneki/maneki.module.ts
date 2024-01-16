import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManekiComponent } from './maneki.component';
import { ManekiRoutingModule } from './maneki-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ManekiComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ManekiRoutingModule
  ]
})
export class ManekiModule { }
