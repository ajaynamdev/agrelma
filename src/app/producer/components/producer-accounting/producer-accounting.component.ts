import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../services/main.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-producer-accounting',
  templateUrl: './producer-accounting.component.html',
  styleUrls: ['../producer.style.css','./producer-accounting.component.css']
})
export class ProducerAccountingComponent implements OnInit {

  consumptionCols:string[] = ["date", "hour", "description", "amount"]; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  consumptionSource:any;

  paymentCols:string[] = ["date", "type", "amount", "confirmed"];
  paymentSource:any;

  selectedSectors:any;

  nodisplay:boolean = false;


  constructor(private mS:MainService) { }

  ngOnInit() {
    this.mS.consumptionH().subscribe((r:any)=>{
      let x = [];
      for (var i of r) {
        let date = i.dataoperazione.slice(0,4)+"-"+i.dataoperazione.slice(4,6)+"-"+i.dataoperazione.slice(6,8);
        let hour = i.oraoperazione.slice(0,2)+":"+i.oraoperazione.slice(2,4);
        let topush = {date: date, hour: hour, description: i.descrizione, amount: i.importo};
        x.push(topush);
      }
      this.consumptionSource = new MatTableDataSource<PeriodicElement>(x.reverse());
      this.consumptionSource.paginator = this.paginator;
    })

    this.mS.paymentH().subscribe((r:any)=>{
      let x = [];
      for(var i of r){
        let date = i.datainoltro.slice(0,4)+"-"+i.datainoltro.slice(4,6)+"-"+i.datainoltro.slice(6,8);
        let cdate = i.dataconferma.slice(0,4)+"-"+i.dataconferma.slice(4,6)+"-"+i.dataconferma.slice(6,8);
        let amount = i.importo;
        let type = "other";
        let topush = {date: date, type: type, amount: amount, confirmed: cdate}
        x.push(topush);
        this.paymentSource = new MatTableDataSource<PeriodicElement>(x);
        this.paymentSource.paginator = this.paginator;
      }
    });

    this.mS.selectedSector().subscribe((r:any)=>{
      console.log(r);
      this.selectedSectors = r;
    })

    
  }


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'download'];
  dataSource = ELEMENT_DATA;

}


export interface consumptionstr{
  date: string;
  hour: string;
  description: string;
  amount: string;
}

let CONSUMPTION_DATA: consumptionstr[] =[];

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