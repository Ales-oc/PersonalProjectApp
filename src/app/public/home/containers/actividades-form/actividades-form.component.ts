import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ActividadesFormService } from './actividades-form.service';


@Component({
  selector: 'app-actividades-form',
  templateUrl: './actividades-form.component.html',
  styleUrls: ['./actividades-form.component.css'],
  providers: [ ActividadesFormService ]
})

export class ActividadesFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ActividadesFormComponent>,
    private actService: ActividadesFormService,
    ) {}

  ngOnInit(): void {}

  onNoClick(){
    this.dialogRef.close();
  }

  sendActDatos(f: NgForm){

    const horas = f.value.horas
    const minutos = f.value.minutos
    const tiempoTotal = (horas + minutos / 60);

    if (f.valid) {
      console.log(f.valid);
      console.log(f.value);
      this.actService.registerAct(f.value.actividad, tiempoTotal);
      console.log('Actividad ingresada');
    }
  }
}
