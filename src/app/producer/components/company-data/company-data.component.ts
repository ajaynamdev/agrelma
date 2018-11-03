import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['../producer.style.css','./company-data.component.css']
})
export class CompanyDataComponent implements OnInit {

  constructor(public mS:MainService) { }

  companyData:any;

  ngOnInit() {
  	this.mS.getCompany().subscribe((r:any)=>{
  		console.log(r);
  		this.companyData = r[0];
  	})
  }




}
