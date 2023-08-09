import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateblogComponent } from 'src/app/blog/updateblog/updateblog.component';

const routes: Routes = [
  {path : "" , component : UpdateblogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateblogRoutingModule { }
