import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from 'src/app/user/adduser/adduser.component';

const routes: Routes = [
  {path : "" , component : AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddusersRoutingModule { }
