import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { NotFoundComponent } from "./components/not-found/not-found.component";


@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent,
  ],
  providers: []
})

export class SharedModule {
  constructor(){}
}
