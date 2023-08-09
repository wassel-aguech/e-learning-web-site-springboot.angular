import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }



  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/users/all`)
  }
  
  
  public addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/users/adduser` , user)
  }



public deleteUser(id: number) : Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/users/delete/${id}`)
}




}
