import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../../../../app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router){}

  public token! : any

  validateLogin(email:string, password:string){

    //localhost_3000/

    return this.http.post('api/login',{
      email : email,
      password : password
    })
  }

  registerUser(user:User){

    return this.http.post('api/register',{
      user: user
    })
  }


  //Comprueba si hay token y por tanto el usuario mantiene la sesión activa
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
