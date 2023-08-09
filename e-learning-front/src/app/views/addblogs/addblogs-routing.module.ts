import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogComponent } from 'src/app/blog/addblog/addblog.component';

const routes: Routes = [
  {path :"" , component : AddblogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddblogsRoutingModule { }
