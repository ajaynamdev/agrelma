import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producer-accounting',
  templateUrl: './producer-accounting.component.html',
  styleUrls: ['../producer.style.css','./producer-accounting.component.css']
})
export class ProducerAccountingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'download'];
  dataSource = ELEMENT_DATA;

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  download: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', download: 'Download'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', download: 'Download'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', download: 'Download'},
];