import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient){}

  registerAct(tipo: String, tiempoDedicado: Number){
    return this.http.post('api/actividades/ingresar', {
      tipo: tipo,
      tiempoDedicado: tiempoDedicado
    });
  }

}
