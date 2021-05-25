import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from "@angular/router";
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { NotFoundComponent } from "./components/not-found/not-found.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    MatTabsModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    MatTabsModule,
    NotFoundComponent,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: []
})

export class SharedModule {
  constructor(){}
}
