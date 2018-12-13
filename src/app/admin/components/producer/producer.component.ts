import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout();
      }
    });
  }

  mobile:boolean = false;

  activateHandsetLayout(){
    this.mobile = true;
  }

  ngOnInit() {
  }

  menu = [
  	{
  		"name": "Offers/Requests",
  		"link": "offer-request"
  	},
  	{
  		"name": "Company Data",
  		"link": "company-data"
  	},
  	{
  		"name": "Create Your Mini Site",
  		"link": "mini-site"
  	},
  	{
  		"name": "Book Your Requests",
  		"link": "book-request"
  	},
  	{
  		"name": "Messages List",
  		"link": "message-list"
  	},
  	{
  		"name": "Messages From Agrelma",
  		"link": "message-agrelma"
  	},
  	{
  		"name": "Other Data",
  		"link": "other-data"
  	},

  ]

}
