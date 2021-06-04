import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient){}

  getActHoy(){
    return this.http.get('api/act/today')
  }

  registerAct(tipo: String, tiempoDedicado: Number){
    return this.http.post('api/actividades/ingresar', {
      tipo: tipo,
      tiempoDedicado: tiempoDedicado
    });
  }

}
