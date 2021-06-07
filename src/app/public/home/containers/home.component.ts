import { Component,OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { FutureImplementsDisclaimerComponent } from './future-implements-disclaimer/future-implements-disclaimer.component'
import { LoginService } from '../../login/containers/login.service';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { PlanificadorComponent } from './planificador/planificador.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit{

private avisoMostrado = localStorage.getItem('avisoMostrado')

  constructor(
    public dialog: MatDialog,
    public loginService: LoginService,
    private router: Router,
    private homeService: HomeService
    ){}

  comprobarLogueado(){
    if(!this.loginService.isLoggedIn()){
      this.router.navigate(['/login'])
    } else {
      this.mostrarAviso();
    }
  }

  ngOnInit(){
    this.comprobarLogueado()
  }

  logout(){
    this.loginService.logout()
    localStorage.setItem('avisoMostrado', 'false')
  }

  mostrarAviso(){
    if (this.avisoMostrado !== 'true') {
      this.dialog.open(FutureImplementsDisclaimerComponent);
      localStorage.setItem('avisoMostrado', 'true')
    }
  }

  irOrganizador(){
    this.router.navigate(['/home/planificador']);
  }

}
