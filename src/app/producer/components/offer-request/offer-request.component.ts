import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-request',
  templateUrl: './offer-request.component.html',
  styleUrls: ['../producer.style.css','./offer-request.component.css']
})
export class OfferRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'sector', 'type', 'country', 'clicks'];
  displayedColumns1: string[] = ['delete', 'modify', 'date', 'image', 'title',  'click', 'page', 'showcase', 'relist'];
  displayedColumns2: string[] = ['date', 'title', 'type'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA;

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  sector: string;
  type: string;
  country: string;
  clicks: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', sector: 'Sector Name', type: 'Type Name', country: 'India', clicks: '3'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', sector: 'Sector Name', type: 'Type Name', country: 'India', clicks: '3'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', sector: 'Sector Name', type: 'Type Name', country: 'India', clicks: '3'},
];
