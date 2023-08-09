import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginform?: FormGroup;
  listusers: any
  found: any
  submitted = false
  username: string = ''
  password: string = ''
  constructor( private router: Router, private http: HttpClient , private loginservice : LoginService) { }


  ngOnInit() {
    this.loginform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
   
  }

 
  login() {
    this.loginservice.isLoggedIn(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(['/home']); 
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}