import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PlanificadorService {

  constructor(private http: HttpClient){}

  registerActPlan( numero:Number, tipo: String, desc: String, tiempoAprox: Number, realizado: Boolean, fechaIngreso: String){
      return this.http.post('api/actividades/planner/ingresar', {
        numero: numero,
        tipo: tipo,
        desc: desc,
        tiempoAprox: tiempoAprox,
        realizado: realizado,
        fechaIngreso: fechaIngreso
      })
      .subscribe(
        (data => {
          console.log(data)
        }),
        (err => {
          console.log(err)
        })
      );
  }

  getActPlan(fechaIngreso: String){
    return this.http.post('api/actividades/planner', {
      fechaIngreso: fechaIngreso
    })
    .pipe (
      tap (actividades => {
        return actividades;
      })
    )
}

  realizadoChanged( numero:Number, realizado: Boolean, fechaIngreso: String){
    return this.http.put('api/actividades/planner/realizadoChanged', {
      numero: numero,
      realizado: realizado,
      fechaIngreso: fechaIngreso
    })
    .subscribe(
      (data => {
        console.log(data)
      }),
      (err => {
        console.log(err)
      })
    );
  }

}

