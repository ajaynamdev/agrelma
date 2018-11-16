import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-offer-request',
  templateUrl: './offer-request.component.html',
  styleUrls: ['../producer.style.css','./offer-request.component.css']
})
export class OfferRequestComponent implements OnInit {

  constructor(private mS:MainService) { }

  offersCols: string[] = ['delete', 'modify', 'date', 'title', 'clicks','pagenumber' , 'showcase', 'relist'];
  offersSource:any;

  requestcols: string[] = ['delete', 'modify', 'date', 'title', 'sector', 'type', 'country', 'clicks'];
  requestSource:any;

  nodisplay:boolean = false;
 

  ngOnInit() {
    window.scrollTo(0,0);
    this.mS.offers().subscribe((r:any)=>{
      console.log(r);
      let x = [];
      for (var i of r) {
        let date = i.datains.slice(0,4)+"-"+i.datains.slice(4,6)+"-"+i.datains.slice(6,8);
        let title = i.titolo;
        let sector = i.nomesettore;
        let type = i.nometipologia;
        let clicks = i.numtotclick;
        let pagenumber = i.pagenumber;
        let offerid = i.iddomoff;
        let topush = {date: date, title: title, sector: sector, type: type, clicks: clicks, pagenumber: pagenumber, offerid:offerid}
        x.push(topush)
      }
      this.offersSource = x;
    })
    this.mS.requests().subscribe((r:any)=>{
      console.log(r);
      let x = [];
      for (var i of r) {
        let date = i.datains.slice(0,4)+"-"+i.datains.slice(4,6)+"-"+i.datains.slice(6,8);
        let title = i.titolo;
        let sector = i.nomesettore;
        let type = i.nometipologia;
        let country = i.paese;
        let clicks = i.numtotclick;
        let topush = {date: date, title: title, sector: sector, type: type, country: country, clicks: clicks}
        x.push(topush)
      }
      this.requestSource = x;
    })
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'sector', 'type', 'country', 'clicks'];
  // displayedColumns1: string[] = ['delete', 'modify', 'date', 'image', 'title',  'click', 'page', 'showcase', 'relist'];
  displayedColumns1: string[] = ['delete', 'modify', 'date', 'title', 'showcase', 'relist'];
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
