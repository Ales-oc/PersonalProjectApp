import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../../app/core/models/user.model';

@Injectable()
export class LoginService {

  constructor(){}

  validateLoginCredentials(email:string, password:string){
    
  }

  validateRegisterCredentials(name:string, email:string, password:string){}

  validateLogin(email:string, password:string){

  }

  registerUser(user:User){}

}
