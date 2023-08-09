import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cours } from 'src/app/model/cours';
import { Lesson } from 'src/app/model/lesson';
import { CoursService } from 'src/app/services/cours.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lessons?: Lesson[];
  cours?: Cours[];
  cours_id?: any;
  public isClicked: boolean = false;
  affectedIndex: any
  affected :any

  constructor(private router: Router, private lessonservice: LessonService, private coursservice: CoursService) { }

  ngOnInit() {
    this.getallLessons();
    this.getallCours();
  }
  getallLessons() {
    this.lessonservice.getAllLessons().subscribe((response: any) => {
      console.log(response);
      this.lessons = response
    }, (error) => {
      console.log(error);
    })
  }
  getallCours() {
    this.coursservice.getAllCours().subscribe((response: any) => {
      this.cours = response
    }, (error) => {
      console.log(error);
    })

  }
  affecterlesson(lessonId: number, cours_id: number, i: any): void {
    this.isClicked = true;
    this.lessonservice.affectationlesson(lessonId, cours_id).subscribe(
      () => {
        alert("affectation effectuer")
        this.affectedIndex = i
        console.log("cette lesson de ID = " ,lessonId , " affected to  cours ID = ", cours_id )
        this.affected = cours_id;
      }, (error) => {
        console.error(" affectation echouer")
      }
    )
  }

  deletelesson(id: any) {
    this.lessonservice.deletelesson(id).subscribe(
      (response: any) => {
        alert("lesson supprimer avec success ")
        this.getallLessons();
      },
      (error) => {
        console.error("lesson echouer verifier votre code SVP !!!!!! ")
      }
    )
  }
  public onClick(): void {
    this.isClicked = true;
  }
}


