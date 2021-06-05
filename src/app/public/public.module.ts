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
import { ChartsModule } from 'ng2-charts';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/containers/home.component";
import { LoginComponent } from "./login/containers/login.component";
import { PieChartComponent } from './home/components/pie-chart/pie-chart.component';
import { BarChartComponent } from './home/components/bar-chart/bar-chart.component';
import { LineChartComponent } from './home/components/line-chart/line-chart.component';
import {ActividadesFormComponent} from './home/containers/actividades-form/actividades-form.component';
import {DineroFormComponent} from './home/containers/dinero-form/dinero-form.component';

import { TokenInterceptorService } from '../core/shared/token-interceptor.service';

//import { LoginGuard } from './login/containers/login.guard';

@NgModule({
  imports: [
    PublicRoutingModule,
    SharedModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    CommonModule,
    MatGridListModule,
    ChartsModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    ActividadesFormComponent,
    DineroFormComponent
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})

export class PublicModule {
  constructor(){}
}
