import { Component,OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { FutureImplementsDisclaimerComponent } from './future-implements-disclaimer/future-implements-disclaimer.component'
import { LoginService } from '../../login/containers/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public dialog: MatDialog, public loginService: LoginService, private router: Router){}

  comprobarLogueado(){
    if(!this.loginService.isLoggedIn()){
      this.router.navigate(['/login'])
    } else {
      this.dialog.open(FutureImplementsDisclaimerComponent);
    }
  }

  ngOnInit(){
    this.comprobarLogueado()
  }



  logout(){
    this.loginService.logout()
  }
}
