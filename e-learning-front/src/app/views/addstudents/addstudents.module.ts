import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstudentsRoutingModule } from './addstudents-routing.module';
import { AddstudentsComponent } from './addstudents/addstudents.component';


@NgModule({
  declarations: [
    AddstudentsComponent
  ],
  imports: [
    CommonModule,
    AddstudentsRoutingModule
  ]
})
export class AddstudentsModule { }
