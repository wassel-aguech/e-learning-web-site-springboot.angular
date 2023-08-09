import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-addcours',
  templateUrl: './addcours.component.html',
  styleUrls: ['./addcours.component.css']
})
export class AddcoursComponent {

  coursform? : FormGroup
  listcours:any;
  submitted=false
    constructor( private coursservice:CoursService, private router:Router ){}
    
    
    ngOnInit(){
      this.coursform = new FormGroup({
        title: new FormControl('', [Validators.required]),
        imageUrl: new FormControl('', [Validators.required]),
        description: new FormControl('', Validators.required),
      })
    }

  onsubmit() {
    this.submitted = true
    if(this.coursform?.invalid){
      return
     }
    this.coursservice.addCours(this.coursform?.value)
      .subscribe(
        Response =>alert('cours added successfuly'),
        error => console.log('error!!', error),
      )
      this.router.navigate(['/admin/listcour']);
  }
  


}
