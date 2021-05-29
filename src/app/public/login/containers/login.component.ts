import { Component, OnInit, Renderer2 } from "@angular/core";
import {FormControl, Validators, NgForm} from '@angular/forms';

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
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(){}

  sendLogin(f: NgForm){

    console.log(f.value)

    console.log(f.valid)

  }

  sendRegister(f: NgForm, apellido: HTMLInputElement){
    console.log(f.value)
    console.log(apellido.value)
    console.log(f.valid)
  }

}
