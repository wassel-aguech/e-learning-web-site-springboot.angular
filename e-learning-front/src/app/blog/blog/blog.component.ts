import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  blogs?: Blog[];


  constructor(private blogservice : BlogService , private router : Router) { }

  ngOnInit() : void{
    this.getallBlogs();

  }

  getallBlogs() {
    this.blogservice.getBlogs().subscribe((response: any) => {

      this.blogs = response

    }, (error) => {
      console.log(error);
    })
    
  }

  showdetails(id : any){
    this.router.navigate(['/blog', id])
  }

}
