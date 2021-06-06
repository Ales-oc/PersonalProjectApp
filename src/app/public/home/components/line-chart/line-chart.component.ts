import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import {MatDialog} from '@angular/material/dialog';
import {DineroFormComponent} from '../../containers/dinero-form/dinero-form.component';
import { LineChartService } from './line-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  providers: [LineChartService]
})

export class LineChartComponent implements OnInit{

  private meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = this.meses;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: 'rgba(59,44,184,0.9)'
    },
  ];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Dinero ganado (€)' },
    { data: [], label: 'Dinero ahorrado (€)' }
  ];

  constructor(
    private dialog: MatDialog,
    private lineService: LineChartService
    ){}

  ngOnInit(){
    this.recibirDatosGanado();
    this.recibirDatosAhorrado();
  }


  formAhorros() {
    this.dialog.open(DineroFormComponent);
  }

  recibirDatosGanado() {
    this.lineService.getDineroGanadoMes()
      .subscribe (data => {
        const json = JSON.parse(JSON.stringify(data))

        this.agregarDatosGanado(json.aggregate);
      });
  }

  recibirDatosAhorrado() {
    this.lineService.getDineroAhorradoMes()
      .subscribe (data => {
        const json = JSON.parse(JSON.stringify(data))

        this.agregarDatosAhorrado(json.aggregate);
      });
  }

  agregarDatosGanado(listaDineroGanado: any){

    for(var i=0; i<listaDineroGanado.length; i++){

      let pos = this.meses.indexOf(listaDineroGanado[i]._id)
      console.log(pos);

      if (this.meses[i] !== listaDineroGanado[i]._id) {

        for (var j = this.barChartData[0].data.length-1; j < pos-1; j++) {
          this.barChartData[0].data.push(0);
        }

      }

      this.barChartData[0].data.splice(pos, 1, listaDineroGanado[i].dineroTotal);
      console.log(this.barChartData[0].data);

    }
  }

  agregarDatosAhorrado(listaDineroAhorrado: any){

    for(var i=0; i<listaDineroAhorrado.length; i++){

      let pos = this.meses.indexOf(listaDineroAhorrado[i]._id)
      console.log(pos);

      if (this.meses[i] !== listaDineroAhorrado[i]._id) {

        for (var j = this.barChartData[1].data.length-1; j < pos-1; j++) {
          this.barChartData[1].data.push(0);
        }

      }

      this.barChartData[1].data.splice(pos, 1, listaDineroAhorrado[i].dineroTotal);
      console.log(this.barChartData[1].data);

    }
  }

}
