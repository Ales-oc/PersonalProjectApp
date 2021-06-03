import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PieChartService {

  private URL = 'http://localhost:3000/api/'

  constructor(private http: HttpClient){}

  getActHoy(){
    return this.http.get('api/act/today')
  }

}
