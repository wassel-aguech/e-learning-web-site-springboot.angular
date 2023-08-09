import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcourRoutingModule } from './addcour-routing.module';
import { AddcourComponent } from './addcour/addcour.component';


@NgModule({
  declarations: [
    AddcourComponent
  ],
  imports: [
    CommonModule,
    AddcourRoutingModule
  ]
})
export class AddcourModule { }
