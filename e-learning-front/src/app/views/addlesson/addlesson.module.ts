import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddlessonRoutingModule } from './addlesson-routing.module';
import { AddlessonsComponent } from './addlessons/addlessons.component';


@NgModule({
  declarations: [
    AddlessonsComponent
  ],
  imports: [
    CommonModule,
    AddlessonRoutingModule
  ]
})
export class AddlessonModule { }
