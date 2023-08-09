import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 users? : User[]
  constructor( private userservice : UserService , private router : Router ){}

  ngOnInit() {
    this.getallUser();
    
  }
  getallUser() {
    this.userservice.getAllUsers().subscribe((response: any) => {
      console.log(response);
      this.users = response
    }, (error) => {
      console.log(error);
    })
  }


  deleteuser(id: any) {
    this.userservice.deleteUser(id).subscribe(
      (response: any) => {
        alert("user supprimer avec success ")
        this.getallUser();
      },
      (error) => {
        console.error("user cant be deleted !!!!!! ")
      }
    )
  }
}
