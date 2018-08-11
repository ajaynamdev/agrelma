import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  constructor() { }

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
