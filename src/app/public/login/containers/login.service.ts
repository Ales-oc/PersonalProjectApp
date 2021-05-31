import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../../app/core/models/user.model';
import { expressionType } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient){}

  validateRegisterCredentials(name:string, email:string, password:string){}

  validateLogin(email:string, password:string){

    //localhost_3000/

    return this.http.post('api/users/login',{
      email : email,
      password : password
    })

  }

  registerUser(user:User){}

}
