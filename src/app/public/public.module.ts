import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {MatGridListModule} from '@angular/material/grid-list';
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/containers/home.component";
import { LoginComponent } from "./login/containers/login.component";
import { PieChartComponent } from './home/components/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './home/components/bar-chart/bar-chart.component';
import {MatSelectModule} from '@angular/material/select';
import { LineChartComponent } from './home/components/line-chart/line-chart.component';

//import { LoginGuard } from './login/containers/login.guard';

@NgModule({
  imports: [
    PublicRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    CommonModule,
    MatGridListModule,
    ChartsModule,
    MatSelectModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    ChartsModule
  ],
  providers: [
    //LoginGuard
  ]
})

export class PublicModule {
  constructor(){}
}
