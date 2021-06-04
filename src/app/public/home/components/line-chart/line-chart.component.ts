import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import {MatDialog} from '@angular/material/dialog';
import {DineroFormComponent} from '../../containers/dinero-form/dinero-form.component'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
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
    { data: [1028.99], label: 'Dinero ganado (€)' },
    { data: [156.67], label: 'Dinero ahorrado (€)' }
  ];

  constructor(public dialog: MatDialog){}

  formAhorros() {
    this.dialog.open(DineroFormComponent);
  }

}
