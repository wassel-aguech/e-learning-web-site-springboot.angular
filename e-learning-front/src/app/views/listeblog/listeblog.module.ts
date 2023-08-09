import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeblogRoutingModule } from './listeblog-routing.module';
import { ListblogComponent } from './listblog/listblog.component';


@NgModule({
  declarations: [
    ListblogComponent
  ],
  imports: [
    CommonModule,
    ListeblogRoutingModule
  ]
})
export class ListeblogModule { }
