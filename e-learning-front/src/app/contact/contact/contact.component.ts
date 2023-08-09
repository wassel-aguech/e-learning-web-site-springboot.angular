import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactform? : FormGroup
  constructor(){}

  ngOnInit(){
  this.contactform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    message: new FormControl('', Validators.required),
  })}

 async send(){
emailjs.init('ejxxOGZABom2LmoiP');
 let response = await emailjs.send("service_ri5b61b","template_ommuu34",{
    from_name:this.contactform?.value.name,
    mail: this.contactform?.value.mail,
    message: this.contactform?.value.message,
    });

    alert("message sended")
    this.contactform?.reset();

 }
  
}
