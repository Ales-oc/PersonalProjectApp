import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../../app/core/models/user.model';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient){}

  validateLogin(email:string, password:string){

    //localhost_3000/

    console.log(email)

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
}
