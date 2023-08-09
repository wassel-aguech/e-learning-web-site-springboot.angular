import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cours } from 'src/app/model/cours';
import { CoursService } from 'src/app/services/cours.service';
import { LessonService } from 'src/app/services/lesson.service';
@Component({
  selector: 'app-addlesson',
  templateUrl: './addlesson.component.html',
  styleUrls: ['./addlesson.component.css']
})
export class AddlessonComponent {

  lessonform? : FormGroup
  listlessons:any;
  submitted=false
  cours? : Cours[]
    constructor( private lessonservice:LessonService, private router:Router, private coursservice : CoursService ){}
    
    
    ngOnInit(){
      this.lessonform = new FormGroup({
        title: new FormControl('', [Validators.required]),
        urlLesson: new FormControl('', [Validators.required]),
        description: new FormControl('', Validators.required),
      })
       this.getallCours();
    }

  onsubmit() {
    this.submitted = true
    if(this.lessonform?.invalid){
      return
     }
    this.lessonservice.addLesson(this.lessonform?.value)
      .subscribe(
        Response =>alert('lesson added successfuly'),
        error => console.log('error!!', error),
      )
      this.router.navigate(['/lesson']);
  }
  getallCours() {
    this.coursservice.getAllCours().subscribe((response: any) => {
      this.cours = response
    }, (error) => {
      console.log(error);
    })
  }
}
