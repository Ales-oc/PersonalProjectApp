import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LineChartService {

  constructor(private http: HttpClient){}

  getDineroGanadoMes(){
    return this.http.get('api/dinero/ganado/mes')
      .pipe (
        tap (dineroGanado => {
          return dineroGanado;
        })
      )
  }

  getDineroAhorradoMes(){
    return this.http.get('api/dinero/ahorrado/mes')
      .pipe (
        tap (dineroGanado => {
          return dineroGanado;
        })
      )
  }
}
