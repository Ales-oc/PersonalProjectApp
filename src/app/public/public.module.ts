import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/containers/home.component";
import { LoginComponent } from "./login/containers/login.component";

@NgModule({
  imports: [
    PublicRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: []
})

export class PublicModule {
  constructor(){}
}
