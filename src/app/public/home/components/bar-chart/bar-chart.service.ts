import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BarChartService {

  constructor(private http: HttpClient){}

  getActSemana(){
    return this.http.get('api/actividades/semana')
      .pipe (
        tap (actividades => {
          return actividades;
        })
      )
  }
}
