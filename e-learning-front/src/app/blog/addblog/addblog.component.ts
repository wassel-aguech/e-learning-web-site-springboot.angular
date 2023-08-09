import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent {


  blogform? : FormGroup
  listblogs:any;
  submitted=false
  public Editor = ClassicEditor;

    constructor( private blogservice:BlogService, private router:Router ){}
    
    
    ngOnInit(){
      this.blogform = new FormGroup({
        title: new FormControl('', [Validators.required]),
        imageUrl: new FormControl('', [Validators.required]),
        content: new FormControl('', Validators.required),
      })
    }




  onsubmit() {
    this.submitted=true
    if(this.blogform?.invalid){
      return
     }
    this.blogservice.addBlog(this.blogform?.value)
      .subscribe(
        Response =>alert('blog added successfuly'),
        error => console.log('error!!', error),
      )       
      this.router.navigate(['/admin/listblog']);
  }


}

