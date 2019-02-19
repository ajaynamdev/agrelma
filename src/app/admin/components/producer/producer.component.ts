import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  constructor(breakpointObserver: BreakpointObserver,
    private cookieService:CookieService) {
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

  type:any;

  activateHandsetLayout(){
    this.mobile = true;
  }

  ngOnInit() {
    this.type = this.cookieService.get('admin_type');
    if (this.type == 'P') {
      this.menu = this.menuP;
    }else{
      this.menu = this.menuX;
    }
    console.log(this.type);
  }

  menu:any;
  menuP = [
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
  menuX = [
    {
      "name": "Offers/Requests",
      "link": "offer-request"
    },
    {
      "name": "Company Data",
      "link": "company-data"
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
