import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcoursComponent } from 'src/app/cours/addcours/addcours.component';

const routes: Routes = [
  {path : "" , component : AddcoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcourRoutingModule { }
