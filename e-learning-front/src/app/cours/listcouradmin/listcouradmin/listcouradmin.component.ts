import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from 'src/app/model/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-listcouradmin',
  templateUrl: './listcouradmin.component.html',
  styleUrls: ['./listcouradmin.component.css']
})
export class ListcouradminComponent {


  cours?: Cours[];

  constructor(private coursservice : CoursService , private router : Router) { }

  ngOnInit() : void{
    this.getallCours();

  }

  getallCours() {
    this.coursservice.getAllCours().subscribe((response: any) => {

      this.cours = response

    }, (error) => {
      console.log(error);

    })
    
  }





  deletecour(id: any) {
    this.coursservice.deleteCours(id).subscribe(
      (response: any) => {
        alert("cour supprimer avec success ")
        this.getallCours();
      },
      (error) => {
        console.error("cour cant be deleted !!!!!! ")
      }
    )
  }

}

