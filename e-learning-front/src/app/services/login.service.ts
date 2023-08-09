import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }
  public addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/users/adduser` , user)
  }
  
  isLoggedIn(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.apiServerUrl}/authenticate`, credentials);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/register`, data);
  }

  refreshToken(): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/refresh-token`, {});
  }
  
  
}
