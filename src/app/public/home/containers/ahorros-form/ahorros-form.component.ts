import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ahorros-form',
  templateUrl: './ahorros-form.component.html',
  styleUrls: ['./ahorros-form.component.css']
})
export class AhorrosFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AhorrosFormComponent>) {}

  ngOnInit(): void {}

  onNoClick(){
    this.dialogRef.close();
  }

  sendAhrrDatos(f:NgForm){


    console.log(f.valid)
    console.log(f.value)


  }
}
