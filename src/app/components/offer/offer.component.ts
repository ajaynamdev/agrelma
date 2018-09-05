import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from '../../services/main.service';
// import * as yh from '../../../assets/js/script.js';

declare var $:any;

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router,
  private mService: MainService) { }

  offerId:number;
  offer:any;
  photo:any;
  description:any;


  ngOnInit() {
  	$.getScript("../../../assets/js/scripts.js", function() {
		});
		this.route.paramMap.subscribe((r:any)=>{
      console.log(r.params.id);
      this.offerId = r.params.id;
      this.mService.getPhoto(this.offerId).subscribe((r:any)=>{
      	this.photo = r;
      	console.log(r);
      	$.getScript("../../../assets/js/scripts.js", function() {
				});
      })

      this.mService.getOffer(this.offerId).subscribe((r:any)=>{
      	this.offer = r[0];
      	console.log(r[0]);
      	this.description = r[0].descrizione;
      })
    })

  }

}
