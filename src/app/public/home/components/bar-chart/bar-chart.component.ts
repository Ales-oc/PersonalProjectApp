import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

interface Actividades {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css', './bar-chart.component.scss']
})

export class BarChartComponent {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Tiempo actividad (h)' }
  ];

  actividades: Actividades[] = [
    {value: 'TrabajoEstudio', viewValue: 'Trabajo/Estudio'},
    {value: 'TiempoLibre', viewValue: 'Tiempo Libre'},
    {value: 'Desarrollo', viewValue: 'Desarrollo Personal'}
  ];

}
