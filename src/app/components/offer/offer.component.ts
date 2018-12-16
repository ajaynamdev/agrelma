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

  company:any;
  country:any;

  isLoaded:boolean = false;
  nodisplay:boolean = false;


  ngOnInit() {
    window.scrollTo(0,0);
    $.getScript("../../../assets/js/scripts.js", function() {
    });
    this.route.paramMap.subscribe((r:any)=>{
      window.scrollTo(0,0);
      console.log(r.params.id);
      this.offerId = r.params.id;
      this.mService.getPhoto(this.offerId).subscribe((r:any)=>{
      	this.photo = r;
      	console.log(r);
        $.getScript("../../../assets/js/scripts.js", function() {
        });
        this.isLoaded = true;
      })

      this.mService.getOffer(this.offerId).subscribe((r:any)=>{
        this.offer = r[0];
        console.log(r[0]);
        this.description = r[0].descrizione;
        this.mService.getProducerCompany(r[0].anagrafica).subscribe((r:any)=>{
          this.company = r.company[0];
          this.country = r.country;
        })
        this.description = this.description.replace(/&#34;/g, '"');
        this.description = this.description.replace(/&#60;/g, '<');
        this.description = this.description.replace(/&lt;/g, '<');
        this.description = this.description.replace(/&#62;/g, '>');
        this.description = this.description.replace(/&gt;/g, '>');
        this.description = this.description.replace(/&amp;/g, '&');
      })
    })

  }

}
