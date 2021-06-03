import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-actividades-form',
  templateUrl: './actividades-form.component.html',
  styleUrls: ['./actividades-form.component.css']
})

export class ActividadesFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ActividadesFormComponent>) {}

  ngOnInit(): void {}

  onNoClick(){
    this.dialogRef.close();
  }

  sendActDatos(f: NgForm){
    console.log(f.valid)
    console.log(f.value)
  }
}
