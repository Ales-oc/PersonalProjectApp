import { Component, OnInit } from "@angular/core";
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { User } from '../../../../app/core/models/user.model';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.scss'],
  providers: [ LoginService ]
})

export class LoginComponent implements OnInit{

  constructor(private loginService: LoginService){
  }

  user: User = new User('', '', '', '', '');

  hide = true
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(){}

  iniciarSesion(email:HTMLInputElement, password:HTMLInputElement){
    this.loginService.validateLogin(email.value, password.value)

  }

  sendLogin(email:HTMLInputElement, password:HTMLInputElement){
    console.log(email.value + password.value)
  }

  registro(nombre:HTMLInputElement, apellido:HTMLInputElement, ciudad:HTMLInputElement, pais:HTMLInputElement, email:HTMLInputElement, password:HTMLInputElement){
    this.loginService.registerUser(this.user = {nombre: nombre.value + ' ' + apellido.value, ciudad: ciudad.value, pais: pais.value, email: email.value, password: password.value})
  }

}
