import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlessonComponent } from 'src/app/lesson/addlesson/addlesson.component';

const routes: Routes = [
  {path : "" , component  : AddlessonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddlessonRoutingModule { }
