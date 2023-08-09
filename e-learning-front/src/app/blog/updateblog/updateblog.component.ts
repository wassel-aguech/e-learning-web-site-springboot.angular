import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-updateblog',
  templateUrl: './updateblog.component.html',
  styleUrls: ['./updateblog.component.css']
})
export class UpdateblogComponent {

  blogform? : FormGroup
  listblogs:any;
  submitted=false
  id:any
  public Editor = ClassicEditor;

    constructor( private blogservice:BlogService, private router:Router, private route :ActivatedRoute  ){}
    
    
    ngOnInit(){
      this.blogform = new FormGroup({
        title: new FormControl('', [Validators.required]),
        imageUrl: new FormControl('', [Validators.required]),
        content: new FormControl('', Validators.required),
      })
      this.getonblog();
    }


    getonblog() {
      this.id = this.route.snapshot.params['id']
      this.blogservice.getBlogById(this.id).subscribe((response) => {
        this.blogform?.patchValue(response);
      }, (Error) => {
        console.log('error')
      })
    }
  
    update() {
      this.blogservice.updateBlog(this.id , this.blogform?.value).subscribe((Response) => {
        alert('blog updated success !!')
        this.router.navigateByUrl('/listblogadmin')
      }, (Error) => {
        console.log('error')
      })
    }
  

}
