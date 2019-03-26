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
  // grid = gridPortionObject; //for debugging
  grid = gridObject;
  originalGrid: Array<any>;
  selected: string;
  reversed: boolean = false;

  startDate: any;
  endDate: any;

  constructor( public http: HttpClient ) {
    this.originalGrid = this.grid;
  }

  ngOnInit() {
    
  }

  sortGrid(sortBy){
    if (this.selected !== sortBy){
      this.reversed = false;
      this.selected = sortBy;
      switch(sortBy){
        case 'city':
          this.grid = this.originalGrid.sort(( a, b ) => a.city.localeCompare(b.city) );
          break;
        case 'start-date':
          this.grid = this.sortDates(this.originalGrid, true);
          break;
        case 'end-date':
          this.grid = this.sortDates(this.originalGrid, false);
          break;
        case 'price':
          this.grid = this.originalGrid.sort(( a, b ) => a.price - b.price );
          break;
        case 'status':
          this.grid = this.originalGrid.sort(( a, b ) => a.status.localeCompare(b.status))
        case 'color':
          this.grid = this.originalGrid.sort(( a, b ) => a.color.localeCompare(b.color) );
      }
    }
    else {
      this.reversed = this.reversed ? false : true;
      this.grid = this.grid.reverse(); 
    }
  }

  sortDates(array, start){
    let sorted = array.sort(function (a, b) { 
      let aa = start ? a.start_date.split('/').reverse().join() : a.end_date.split("/").reverse().join();
      let bb = start ? b.start_date.split('/').reverse().join() : b.end_date.split("/").reverse().join();
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
    return start ? sorted : sorted.reverse();
  }

  onChange(e, start){
    let date = e.toLocaleString();
    let clippedDate = this.clipDate(date);
    start ? this.startDate = clippedDate : this.endDate = clippedDate;
    console.log("Start date: ", this.startDate, "End date: ", this.endDate)
  }

  clipDate(date){
    let arrayDate = date.toLocaleString().split("/").reverse();
    let month = arrayDate[1].toString().length > 1 ? arrayDate[1] : "0" + arrayDate[1];
    let day = arrayDate[2].toString().length > 1 ? arrayDate[2] : "0" + arrayDate[2];
    arrayDate[1] = month, arrayDate[2] = day;
    return arrayDate.join("");
  }

  filterDates(){
    if (this.startDate && this.endDate){
      this.grid = this.originalGrid.filter(m => {
        return this.clipDate(m.start_date) > this.startDate && this.clipDate(m.end_date) < this.endDate
      })
      return;
    }
    else if (this.startDate && !this.endDate){
      this.grid = this.originalGrid.filter(m => {
        return this.clipDate(m.start_date) > this.startDate
      })
      return;
    }
    else if (this.endDate && !this.startDate) {
      this.grid = this.originalGrid.filter(m => {
        return this.clipDate(m.end_date) < this.endDate;
      })
      return;
    }
    
  }

}
