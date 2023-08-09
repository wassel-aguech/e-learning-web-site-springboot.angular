import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddblogsRoutingModule } from './addblogs-routing.module';
import { AddblogsComponent } from './addblogs/addblogs.component';


@NgModule({
  declarations: [
    AddblogsComponent
  ],
  imports: [
    CommonModule,
    AddblogsRoutingModule
  ]
})
export class AddblogsModule { }
