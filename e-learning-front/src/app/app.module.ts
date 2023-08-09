import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcoursComponent } from './cours/addcours/addcours.component';
import { CoursComponent } from './cours/cours/cours.component';
import { UpdatecoursComponent } from './cours/updatecours/updatecours.component';
import { AddlessonComponent } from './lesson/addlesson/addlesson.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursdetailsComponent } from './cours/coursdetails/coursdetails.component';
import { LessonComponent } from './lesson/lesson/lesson.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { SafePipe } from './cours/coursdetails/safe.pipe';
import { FooterComponent } from './footer/footer/footer.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UserComponent } from './user/user/user.component';
import { ListcouradminComponent } from './cours/listcouradmin/listcouradmin/listcouradmin.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AddblogComponent } from './blog/addblog/addblog.component';
import { BlogComponent } from './blog/blog/blog.component';
import { ListblogadminComponent } from './blog/listblogadmin/listblogadmin.component';
import { UpdateblogComponent } from './blog/updateblog/updateblog.component';
import { BlogdetailsComponent } from './blog/blogdetails/blogdetails.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
    AddcoursComponent,
    CoursComponent,
    UpdatecoursComponent,
    AddlessonComponent,
    CoursdetailsComponent,
    LessonComponent,
    SafePipe,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    AdduserComponent,
    UserComponent,
    ListcouradminComponent,
    ContactComponent,
    AddblogComponent,
    BlogComponent,
    ListblogadminComponent,
    UpdateblogComponent,
    BlogdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule,
    CKEditorModule,
    LayoutModule,
    RouterModule
    
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
