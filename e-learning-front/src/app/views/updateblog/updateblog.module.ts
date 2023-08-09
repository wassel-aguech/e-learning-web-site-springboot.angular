import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateblogRoutingModule } from './updateblog-routing.module';
import { UpdateblogsComponent } from './updateblogs/updateblogs.component';


@NgModule({
  declarations: [
    UpdateblogsComponent
  ],
  imports: [
    CommonModule,
    UpdateblogRoutingModule
  ]
})
export class UpdateblogModule { }
