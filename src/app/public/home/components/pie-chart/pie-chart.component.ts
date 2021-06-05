import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import {MatDialog} from '@angular/material/dialog';
import {ActividadesFormComponent} from '../../containers/actividades-form/actividades-form.component'
import {PieChartService} from './pie-chart.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  providers: [PieChartService]
})

export class PieChartComponent implements OnInit {

  private tiemposAct = new Array()

  constructor(
    public dialog: MatDialog,
    public pieService: PieChartService,

    ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }


  ngOnInit(){

    this.recibirDatosAct();
  }




  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Desarrollo Personal'], ['Tiempo libre'], 'Trabajo/Estudio'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: ['rgba(6,194,100,0.9)', 'rgba(255,89,94,0.9)', 'rgba(103,58,183,0.9)']
    },
  ];

  formActividadesHoy(){

    this.dialog.open(ActividadesFormComponent);
  }

  recibirDatosAct() {

    this.pieService.getActHoy()
    .subscribe (data => {
      const json = JSON.parse(JSON.stringify(data))

      this.agregarDatos(json)

      for(let i = 0; i<json.aggregate.length; i++){
        this.tiemposAct.push(json.aggregate[i].tiempoTotal)
      }

      this.agregarDatos(this.tiemposAct);


    });

  }

  agregarDatos(tiemposAct: Array<Number>){
    for(let i = 0; i<tiemposAct.length; i++){
      this.pieChartData.push(this.tiemposAct[i])
    }
  }

}
