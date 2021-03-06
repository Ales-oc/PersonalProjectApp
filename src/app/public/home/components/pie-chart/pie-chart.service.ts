import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PieChartService {

  private URL = 'http://localhost:3000/api/'

  constructor(private http: HttpClient){}

  getActHoy(){
    return this.http.get('api/actividades/hoy')
      .pipe (
        tap (actividades => {
          return actividades;
        })
      )
  }

}
