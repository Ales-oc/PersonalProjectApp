import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { NotFoundComponent } from "./components/not-found/not-found.component";


@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NotFoundComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})

export class SharedModule {
  constructor(){}
}
