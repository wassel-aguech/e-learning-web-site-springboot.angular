import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListlessonRoutingModule } from './listlesson-routing.module';
import { ListlessonComponent } from './listlesson/listlesson.component';


@NgModule({
  declarations: [
    ListlessonComponent
  ],
  imports: [
    CommonModule,
    ListlessonRoutingModule
  ]
})
export class ListlessonModule { }
