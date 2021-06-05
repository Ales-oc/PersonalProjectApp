import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DineroFormService {

  constructor(private http: HttpClient){}

  registerAhorrado(mes: String, total: Number){
    return this.http.post('api/dahorrado/ingresar', { mes: mes, total: total })
      .subscribe(
        (data => {
          console.log(data)
        }),
        (err => {
          console.log(err)
        })
      );
  }

  registerGanado(mes: String, total: Number){
    return this.http.post('api/dganado/ingresar', { mes: mes, total: total })
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
