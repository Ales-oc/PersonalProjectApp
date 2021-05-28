import { Component, OnInit } from "@angular/core";
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

  constructor(private loginService: LoginService){
  }

  user: User = new User('', '', '', '', '');

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
