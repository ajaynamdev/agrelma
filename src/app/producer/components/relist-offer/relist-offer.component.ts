import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-relist-offer',
  templateUrl: './relist-offer.component.html',
  styleUrls: ['../producer.style.css','./relist-offer.component.css']
})
export class RelistOfferComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router,
  private mService: MainService) { }

  offerId:any;
  photo:any;
  offer:any;
  description:any;
  company:any;
  country:any;
  todo:any;

  one:boolean = false;
  two:boolean = false;
  three:boolean = false;

  total:number = 0;

  ngOnInit() {
  	this.route.paramMap.subscribe((r:any)=>{
  		window.scrollTo(0,0);
	    console.log(r.params.offerid);
	    console.log(r.params.todo);

	    this.todo = r.params.todo;
	    if (this.todo == '1') {
	    	this.one = true;
	    	this.total = 4;
	    }else if(this.todo == '2'){
	    	this.two = true;
	    	this.total = 9;
	    }else if(this.todo == '3'){
	    	this.three = true;
	    	this.total = 28;
	    }
	    this.offerId = r.params.offerid;
	    this.mService.getPhoto(this.offerId).subscribe((r:any)=>{
	      	this.photo = r;
	      	console.log(r);
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

  vchange(x = "one"){
  	if (x == 'two') {
  		// this.two = true;
  		this.three = false;
  	}
  	if (x == 'three') {
  		// this.three = true;
  		this.two = false;
  	}
  	console.log("One = " + this.one);
  	console.log("Two = " + this.two);
  	console.log("Three = " + this.three);

  	let a = 0;
  	let b = 0;
  	let c = 0;
  	a = this.one ? 4:0;
  	b = this.two ? 9:0;
  	c = this.three ? 28:0;

  	console.log("a = "+a);
  	console.log("b = "+b);
  	console.log("c = "+c);
  	this.total = a+b+c;
  	console.log("total = "+this.total);
  }

  proceed(){
  	console.log("Proceeded");
  	this.router.navigate(["/x-pay/"+this.total]);
  }

}
