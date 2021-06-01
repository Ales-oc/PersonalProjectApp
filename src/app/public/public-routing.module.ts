import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/containers/home.component";
import { PublicComponent } from "./public.component";
import { LoginComponent } from "./login/containers/login.component";

//import {LoginGuard} from './login/containers/login.guard';

const routes: Routes = [
  { path: '', component: PublicComponent, children:
    [
      {path: '', redirectTo:'/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent/*, canActivate: [LoginGuard]*/},
      {path: 'login', component: LoginComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule {
  constructor(){}
}
