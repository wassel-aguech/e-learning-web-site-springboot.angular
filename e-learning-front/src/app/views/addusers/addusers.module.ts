import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddusersRoutingModule } from './addusers-routing.module';
import { AddusersComponent } from './addusers/addusers.component';


@NgModule({
  declarations: [
    AddusersComponent
  ],
  imports: [
    CommonModule,
    AddusersRoutingModule
  ]
})
export class AddusersModule { }
