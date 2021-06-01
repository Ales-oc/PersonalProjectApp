import { error } from "@angular/compiler/src/util";
import { Component, OnInit} from "@angular/core";
import {NgForm} from '@angular/forms';
import { User } from '../../../../app/core/models/user.model';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.scss'],
  providers: [ LoginService ]
})

export class LoginComponent implements OnInit{

  constructor(private loginService: LoginService){}

  //! significa que va atener valor en el futuro, así no tengo que inicuializarlo con los vacios
  user!: User

  hide = true

  ngOnInit(){}

  sendLogin(f: NgForm){

    if(f.valid) {
      this.loginService.validateLogin(f.value.email, f.value.password).subscribe(data => {
        console.log("Logueado")
      },
      error => {
        console.log(error)
      })

    }

  }

  sendRegister(f: NgForm, apellido: HTMLInputElement){

    if(f.valid) {
      this.loginService.registerUser(this.user = new User(f.value.nombre + " " + apellido.value, f.value.ciudad, f.value.pais, f.value.emailr, f.value.password)).subscribe(data => {
        console.log("Usuario registrado")
      },
      error => {
        console.log(error)
      })

    }

  }

}
