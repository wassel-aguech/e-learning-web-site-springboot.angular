import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Cours } from '../model/cours';



@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http : HttpClient) { }



  public getAllCours():Observable<Cours[]>{
    return this.http.get<Cours[]>(`${this.apiServerUrl}/cours/all`)
  }

  public getCoursById(id :any) : Observable<Cours>{
    return this.http.get<Cours>(`${this.apiServerUrl}/cours/find/${id}`)
  }
  
  
  public addCours(cours:Cours):Observable<Cours>{
    return this.http.post<Cours>(`${this.apiServerUrl}/cours/add` , cours)
  }
  
  public updateCours( id :any ,cours:Cours):Observable<Cours>{
    return this.http.put<Cours>(`${this.apiServerUrl}/cours/update/${id}` , cours)
  }
  
  public deleteCours(coursId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/cours/delete/${coursId}`)
  }


}
