import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { DineroFormService } from './dinero-form.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dinero-form',
  templateUrl: './dinero-form.component.html',
  styleUrls: ['./dinero-form.component.css'],
  providers: [DineroFormService]
})
export class DineroFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DineroFormComponent>,
    private dineroService: DineroFormService,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onNoClick(){
    this.dialogRef.close();
  }

  sendAhrrDatos(f:NgForm){
    try{
      console.log(f.valid)
      console.log(f.value)

      if (f.valid) {
        this.dineroService.registerAhorrado(f.value.mesAh, f.value.dineroAhorrado)

        console.log('Dinero ahorrado ingresado');
        this.dialogRef.close();
        this._snackBar.open("Se ha ingresado el dato correctamente", "", {
          duration: 5
        });
      }

    } catch {
      alert('Error al introducir en la base de datos')
    }

  }

  sendGanadoDatos(f:NgForm){
    try{
      console.log(f.valid)
      console.log(f.value)

      if (f.valid) {
        this.dineroService.registerGanado(f.value.mes, f.value.dineroGanado)
        
        console.log('Dinero ganado ingresado');
        this.dialogRef.close();
        this._snackBar.open("Se ha ingresado el dato correctamente", "", {
          duration: 5
        });
      }


    } catch {
      alert('Error al introducir en la base de datos')
    }
  }
}
