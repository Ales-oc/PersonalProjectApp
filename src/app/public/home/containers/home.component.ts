import { Component,OnInit } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import { FutureImplementsDisclaimerComponent } from './future-implements-disclaimer/future-implements-disclaimer.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public dialog: MatDialog){}

  ngOnInit(){this.dialog.open(FutureImplementsDisclaimerComponent);}
}
