import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ActividadesFormService {

  constructor(private http: HttpClient){}

  registerAct(tipo: String, tiempoDedicado: Number){
    return this.http.post('api/actividades/ingresar', { tipo: tipo, tiempoDedicado: tiempoDedicado })
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

