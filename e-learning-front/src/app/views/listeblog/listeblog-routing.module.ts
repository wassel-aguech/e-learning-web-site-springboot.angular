import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListblogadminComponent } from 'src/app/blog/listblogadmin/listblogadmin.component';

const routes: Routes = [
  {path : "" , component : ListblogadminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeblogRoutingModule { }
