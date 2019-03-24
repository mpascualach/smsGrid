import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var require: any

const gridObject = require('./grid.json');
const gridPortionObject = require('./gridportion.json');

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  grid = gridPortionObject;

  constructor( public http: HttpClient ) {

  }

  ngOnInit() {
    // console.log(gridObject);
    console.log(gridPortionObject);
  }

  sortGrid(){

  }

  filterDates(){
    
  }

}
