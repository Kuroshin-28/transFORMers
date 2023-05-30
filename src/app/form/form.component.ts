import { Component } from '@angular/core';

export class formulaire {
  firstname : string;
  lastname : string;
  age : number;
  mail : string;
  phone : string;
  password : string;

  constructor(firstname: string, lastname: string, age: number, mail: string, phone: string, password: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.mail = mail;
    this.phone = phone;
    this.password = password;
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  
  model: formulaire = new formulaire("", "", 0, "", "", "");
  submitted: boolean = false;

  constructor() {

  }

  onSubmit() : void {
    this.submitted = true;
    console.log("Votre demande a été envoyée.");
  }
}