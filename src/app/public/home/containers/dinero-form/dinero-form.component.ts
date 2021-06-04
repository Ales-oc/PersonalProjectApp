import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinero-form',
  templateUrl: './dinero-form.component.html',
  styleUrls: ['./dinero-form.component.css']
})
export class DineroFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DineroFormComponent>) {}

  ngOnInit(): void {}

  onNoClick(){
    this.dialogRef.close();
  }

  sendAhrrDatos(f:NgForm){


    console.log(f.valid)
    console.log(f.value)


  }

  sendGanadoDatos(f:NgForm){

  }
}
