import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import {MatDialog} from '@angular/material/dialog';
import {ActividadesFormComponent} from '../../containers/actividades-form/actividades-form.component'
import {PieChartService} from './pie-chart.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Trabajo/Estudio'], ['Tiempo libre'], 'Desarrollo Personal'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: ['rgba(6,194,100,0.9)', 'rgba(255,89,94,0.9)', 'rgba(103,58,183,0.9)']
    },
  ];
  constructor(public dialog: MatDialog, private pieService: PieChartService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  formActividadesHoy(){

    this.dialog.open(ActividadesFormComponent);
  }

  ngOnInit(){
    this.pieService.getActHoy()
    .subscribe(
      res => {
        console.log(res)
        //agregar datos
      },
      err => console.log(err)
    )
  }

}
