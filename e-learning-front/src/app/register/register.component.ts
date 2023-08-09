import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userform? : FormGroup
listUsers:any;
submitted=false
  constructor(private router:Router, private userservice : UserService , private loginservice : LoginService ){}
  
  
  ngOnInit(){
    this.userform = new FormGroup({
      fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      numtel: new FormControl('', [Validators.required, Validators.minLength(5)]),
      country: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
     
    })
  }

  onsubmit(){
    this.submitted = true
    if(this.userform?.invalid){
      return
     }
    this.loginservice.register(this.userform?.value)
      .subscribe(
        Response =>alert('user added successfuly'),
        error => console.log('error!!', error),
      )
      this.router.navigate(['/login']);

  }


}
