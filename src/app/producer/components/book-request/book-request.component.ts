import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../services/main.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-book-request',
  templateUrl: './book-request.component.html',
  styleUrls: ['../producer.style.css','./book-request.component.css']
})
export class BookRequestComponent implements OnInit {

  constructor(private mS:MainService) { }

  nodisplay:boolean = false;
  selectedSectors:any;
  countryList:any;
  companyData:any;

  ngOnInit() {
  	this.mS.selectedSector().subscribe((r:any)=>{
      console.log(r);
      this.selectedSectors = r;
    })
    this.mS.countryList().subscribe((r:any)=>{
    	console.log(r);
    	this.countryList = r;
    })
    this.mS.getCompany().subscribe((r:any)=>{
  		console.log(r);
  		this.companyData = r[0];
  	})
  }

}
