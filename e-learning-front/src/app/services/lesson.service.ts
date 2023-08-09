import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Lesson } from '../model/lesson';
@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor( private http : HttpClient ) { }



  public getAllLessons():Observable<Lesson[]>{
    return this.http.get<Lesson[]>(`${this.apiServerUrl}/lessons/all`)
  }
  
  
  public addLesson(lesson:Lesson):Observable<Lesson>{
    return this.http.post<Lesson>(`${this.apiServerUrl}/lessons/addlesson` , lesson)
  }



public deletelesson(id: number) : Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/lessons/delete/${id}`)
}



  public affectationlesson(lessonId: number ,coursId: number) {
    return this.http.put(`${this.apiServerUrl}/cours/affectation/${lessonId}/${coursId}`,{});
  
  }








}
