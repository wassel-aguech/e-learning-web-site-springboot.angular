import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListcourRoutingModule } from './listcour-routing.module';
import { ListcourComponent } from './listcour/listcour.component';


@NgModule({
  declarations: [
    ListcourComponent
  ],
  imports: [
    CommonModule,
    ListcourRoutingModule
  ]
})
export class ListcourModule { }
