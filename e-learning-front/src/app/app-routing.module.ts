import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours/cours.component';
import { UpdatecoursComponent } from './cours/updatecours/updatecours.component';
import { AddcoursComponent } from './cours/addcours/addcours.component';
import { CoursdetailsComponent } from './cours/coursdetails/coursdetails.component';
import { LessonComponent } from './lesson/lesson/lesson.component';
import { AddlessonComponent } from './lesson/addlesson/addlesson.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UserComponent } from './user/user/user.component';
import { LoginGuard } from './guards/login.guard';
import { ListcouradminComponent } from './cours/listcouradmin/listcouradmin/listcouradmin.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AddblogComponent } from './blog/addblog/addblog.component';
import { UpdateblogComponent } from './blog/updateblog/updateblog.component';
import { BlogComponent } from './blog/blog/blog.component';
import { ListblogadminComponent } from './blog/listblogadmin/listblogadmin.component';
import { BlogdetailsComponent } from './blog/blogdetails/blogdetails.component';
import { AdminComponent } from './layout/admin/admin.component';


const routes: Routes = [

  {path : "cours" , component : CoursComponent ,canActivate: [LoginGuard]},
  {path : "addcours" , component : AddcoursComponent},
  {path : "updatecours" , component : UpdatecoursComponent},
  {path : "cours/:id" , component : CoursdetailsComponent},
  {path : "lesson" , component : LessonComponent},
  {path : "addlesson" , component : AddlessonComponent},
  {path : "home" , component : HomeComponent},
  {path : "login" , component : LoginComponent},
  {path : "register" , component : RegisterComponent},
  {path : "dashbord" , component : DashbordComponent},
  {path : "adduser" , component : AdduserComponent},
  {path : "user" , component : UserComponent},
  {path : "listcouradmin" , component : ListcouradminComponent},
  {path : "contact" , component : ContactComponent},
  {path : "addblog" , component : AddblogComponent},
  {path : "listblogadmin/:id", component : UpdateblogComponent},
  {path : "blog" , component : BlogComponent},
  {path : "blog/:id" , component : BlogdetailsComponent},
  {path : "blogdetails" , component : BlogdetailsComponent},
  {path : "listblogadmin",component : ListblogadminComponent},

  {path : "admin" , component : AdminComponent
,children:[
  {path : "addblogs" , loadChildren:()=>import('./views/addblogs/addblogs.module').then(m=>m.AddblogsModule)},
  {path : "addcour" , loadChildren:()=>import('./views/addcour/addcour.module').then(m=>m.AddcourModule)},
  {path : "addlessons" , loadChildren:()=>import('./views/addlesson/addlesson.module').then(m=>m.AddlessonModule)},
  {path : "addusers" , loadChildren:()=>import('./views/addusers/addusers.module').then(m=>m.AddusersModule)},
  {path : "listcour" , loadChildren:()=>import('./views/listcour/listcour.module').then(m=>m.ListcourModule)},
  {path : "listlesson" , loadChildren:()=>import('./views/listlesson/listlesson.module').then(m=>m.ListlessonModule)},
  {path : "listblog" , loadChildren:()=>import('./views/listeblog/listeblog.module').then(m=>m.ListeblogModule)},
  {path : "listuser" , loadChildren:()=>import('./views/listuser/listuser.module').then(m=>m.ListuserModule)},
  {path : "listblog/:id" , loadChildren:()=>import('./views/updateblog/updateblog.module').then(m=>m.UpdateblogModule)},









]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
