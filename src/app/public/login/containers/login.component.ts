import { Component, OnInit } from "@angular/core";
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.scss']
})

export class LoginComponent implements OnInit{
  constructor(){}

  hide = true
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(){
  }
}
