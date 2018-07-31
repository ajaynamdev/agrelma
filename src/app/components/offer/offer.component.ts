import { Component, OnInit } from '@angular/core';
// import * as yh from '../../../assets/js/script.js';

declare var $:any;

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$.getScript("../../../assets/js/scripts.js", function() {
		});
  }

}
