import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent {

  blogid!: number;
  infoblog: any
  likes : number = 0;
  constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogService) {
  }

  ngOnInit() {
    this.getoneblog();
  }

  getoneblog() {

    this.blogid = this.route.snapshot.params['id']
    this.blogService.getBlogById(this.blogid).subscribe((response: any) => {

      this.infoblog = response

    }, (error: any) => {
      console.log(error);
    })

  }
  liky(){
    this.likes++
  }

}



