import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { BarChartService } from './bar-chart.service';
import { Actividad } from '../../../../core/models/actividad.model'

interface Actividades {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css', './bar-chart.component.scss'],
  providers: [BarChartService]
})

export class BarChartComponent implements OnInit {

private listaAct = new Array()
actividad!:Actividad

constructor(
  private barService: BarChartService
){}

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Tiempo actividad (h)'
    }
  ];

  public barChartColors: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: ''
    },
  ];

  selectedValue: string;

  actividades: Actividades[] = [
    {value: 'TrabajoEstudios', viewValue: 'Trabajo/Estudios'},
    {value: 'TiempoLibre', viewValue: 'Tiempo Libre'},
    {value: 'Desarrollo', viewValue: 'Desarrollo Personal'}
  ];

  ngOnInit(){
    this.recibirDatosAct()

  }

  cargarDatosActividad(selectedValue: string){

    this.limpiarDatos()

    switch (selectedValue) {
      case 'TrabajoEstudios':
        this.agregarDatos('TrabajoEstudios');
        this.barChartColors[0].backgroundColor = 'rgba(103,58,183,0.9)' ;
        break;

        case 'TiempoLibre':
          this.agregarDatos('TiempoLibre');
          this.barChartColors[0].backgroundColor = 'rgba(255,89,94,0.9)';
          break;

          case 'Desarrollo':
            this.agregarDatos('Desarrollo');
            this.barChartColors[0].backgroundColor = 'rgba(6,194,100,0.9)';
            break;

      default:
        break;
    }
  }

  recibirDatosAct() {

    this.barService.getActSemana()
    .subscribe (data => {
      const json = JSON.parse(JSON.stringify(data))

      for(let i = 0; i<json.aggregate.length; i++){
        this.actividad = new Actividad(
          json.aggregate[i]._id.tipo,
          json.aggregate[i].tiempoTotal,
          json.aggregate[i].fechaIngreso
        )

        this.listaAct.push(this.actividad)
      }

      //console.log(this.listaAct);

    });

  }

  agregarDatos(tipo: String) {
    var fecha: any

    for(let i = 0; i<this.listaAct.length; i++) {
      if(this.listaAct[i].tipo.toString() == tipo) {
        fecha = this.listaAct[i].fechaIngreso[0].slice(5,-14)
        fecha = fecha.split('-')[1]+"/"+fecha.split('-')[0]

        this.barChartLabels.push(fecha)
        this.barChartData[0].data.push(this.listaAct[i].tiempoTotal)
      }
    }
  }

  limpiarDatos() {
    this.barChartLabels.splice(0, this.barChartLabels.length);
    this.barChartData[0].data.splice(0, this.barChartLabels.length);
  }

}




