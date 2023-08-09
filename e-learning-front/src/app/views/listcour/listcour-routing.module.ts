import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcouradminComponent } from 'src/app/cours/listcouradmin/listcouradmin/listcouradmin.component';

const routes: Routes = [
  {path : "" , component : ListcouradminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListcourRoutingModule { }
