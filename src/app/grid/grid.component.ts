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
  originalGrid: Array<any>;
  selected: string;


  constructor( public http: HttpClient ) {
    this.originalGrid = this.grid;
    this.originalGrid.forEach(m => {
      console.log(m.city);
    })
  }

  ngOnInit() {
    
  }

  sortGrid(sortBy){

    switch(sortBy){
      case 'city':
        this.grid = this.originalGrid.sort(( a, b ) => a.city.localeCompare(b.city) );
        break;
      case 'start-date':
        this.grid = this.sortDates(this.originalGrid, true);
        break;
      case 'end-date':
        this.grid = this.sortDates(this.originalGrid, true);
        break;
      case 'price':
        this.grid = this.originalGrid.sort(( a, b ) => a.price - b.price );
        break;
      case 'status':
      case 'color':
        this.grid = this.originalGrid.sort(( a, b ) => a.color.localeCompare(b.color) );
    }
  }

  sortDates(array, start){
    let sorted = array.sort(function (a, b) { 
      var aa = a.split('/').reverse().join(),
      bb = b.split('/').reverse().join();
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
    return start ? sorted : sorted.reverse();
  }

  filterDates(){

  }

}
