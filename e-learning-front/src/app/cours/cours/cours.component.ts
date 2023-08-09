import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from 'src/app/model/cours';
import { Lesson } from 'src/app/model/lesson';
import { CoursService } from 'src/app/services/cours.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit{
  
  cours?: Cours[];
  lessons?: Lesson[];

  constructor(private coursservice : CoursService , private router : Router, private lessonservice : LessonService) { }

  ngOnInit() : void{
    this.getallCours();
    this.getallLessons();

  }

  getallCours() {
    this.coursservice.getAllCours().subscribe((response: any) => {

      this.cours = response

    }, (error) => {
      console.log(error);

    })
    
  }
  
  getallLessons() {
    this.lessonservice.getAllLessons().subscribe((response: any) => {

      this.lessons = response

    }, (error) => {
      console.log(error);

    })
  }

  viewcours(id : any){
    this.router.navigate(['/cours', id])
  }
 
   




}
