import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';
@Component({
  selector: 'app-coursdetails',
  templateUrl: './coursdetails.component.html',
  styleUrls: ['./coursdetails.component.css']
})
export class CoursdetailsComponent implements OnInit, PipeTransform {
  coursid?: number;
  coursinfo: any
  url: any
  constructor(private route: ActivatedRoute, private coursservice: CoursService, private sanitazer: DomSanitizer) {
  }
  ngOnInit() {
    this.getonecours();
  }
  transform(url: any) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(this.url);
  }
  passurl(url: any) {
    this.url = url.replace("watch?v=", "embed/");
    console.log(this.url);
    return this.sanitazer.bypassSecurityTrustResourceUrl(this.url);
  }
  getonecours() {
    this.coursid = this.route.snapshot.params['id']
    this.coursservice.getCoursById(this.coursid).subscribe((response: any) => {
      this.coursinfo = response
      console.log(this.coursinfo)
    }, (error: any) => {
      console.log(error);
    })
  }





}