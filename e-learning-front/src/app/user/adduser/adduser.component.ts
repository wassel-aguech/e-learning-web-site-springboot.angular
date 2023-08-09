import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {


  userform? : FormGroup
  listUsers:any;
  submitted=false
    constructor(private router:Router   , private  userservice : UserService){}
    
    
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
      this.userservice.addUser(this.userform?.value)
        .subscribe(
          Response =>alert('user added successfuly'),
          error => console.log('error!!', error),
        )
        this.router.navigate(['/admin/listuser']);

    }
  }
  

