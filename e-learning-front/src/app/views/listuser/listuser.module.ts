import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListuserRoutingModule } from './listuser-routing.module';
import { ListuserComponent } from './listuser/listuser.component';


@NgModule({
  declarations: [
    ListuserComponent
  ],
  imports: [
    CommonModule,
    ListuserRoutingModule
  ]
})
export class ListuserModule { }
