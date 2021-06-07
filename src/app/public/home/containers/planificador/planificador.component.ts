import { Component, OnInit } from '@angular/core';
import { PlanificadorService } from './planificador.service'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../../login/containers/login.service'
import { Router } from '@angular/router';
import { MatCheckbox } from '@angular/material/checkbox';
import { ActividadPlanificador } from '../../../../core/models/actividad-org.model'

@Component({
  selector: 'app-planificador',
  templateUrl: './planificador.component.html',
  styleUrls: ['./planificador.component.css', './planificador.component.scss'],
  providers: [PlanificadorService]
})

export class PlanificadorComponent implements OnInit {

  public actividadesPlanificador: ActividadPlanificador[] = [];

  public numActRealizadas: number = 0;

  private fechaFormateada: string;

  constructor(
    private planificadorService: PlanificadorService,
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit() {
    if(!this.loginService.isLoggedIn()){
      this.router.navigate(['/login'])
    }
  }

  changeDate(type: string, event: MatDatepickerInputEvent<Date>) {

    this.numActRealizadas = 0;

    this.fechaFormateada = this.formatearFechaCalender(event.value.toString());

    this.actividadesPlanificador.splice(0, this.actividadesPlanificador.length);

    this.planificadorService.getActPlan(this.fechaFormateada)
      .subscribe (data => {
        const json = JSON.parse(JSON.stringify(data))

        console.log(json.aggregate.length);

        for(let i = 0; i<json.aggregate.length; i++){

          this.actividadesPlanificador.push(new ActividadPlanificador(
            json.aggregate[i].numero,
            json.aggregate[i].tipo,
            json.aggregate[i].desc,
            json.aggregate[i].tiempoAprox,
            json.aggregate[i].realizado
          ))

            if (json.aggregate[i].realizado) {
              this.numActRealizadas++
            }

        }


      });
  }

  checkedChange(actNumber: number, checkbox: MatCheckbox){

    if (checkbox.checked) {
      this.numActRealizadas++;
    } else {
      this.numActRealizadas--;
    }

    this.planificadorService.realizadoChanged(actNumber, checkbox.checked, this.fechaFormateada)

  }

  sendPlanificadorDatos(f:NgForm){

    this.planificadorService.registerActPlan(this.actividadesPlanificador.length+1, f.value.tipo, f.value.desc, f.value.tiempoAprox, false, this.fechaFormateada);

  }

  formatearFechaCalender(fecha: any) {
    return fecha.substring(4, 15)
  }

  logout(){
    this.loginService.logout()
    localStorage.setItem('avisoMostrado', 'false')
  }

  volverHome(){
    this.router.navigate(['/home']);
  }

  agregarDatos(){

  }

}
