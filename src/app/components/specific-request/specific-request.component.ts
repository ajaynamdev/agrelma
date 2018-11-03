import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { MainService } from '../../services/main.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-specific-request',
  templateUrl: './specific-request.component.html',
  styleUrls: ['./specific-request.component.css']
})
export class SpecificRequestComponent implements OnInit {

	constructor(private mS:MainService,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute,
	  private router: Router,) { }

  ngOnInit() {
  }

  selectedTab = 0;

  dmessage = "Continue";

  checkForm(title, product, product_description){
  	if (title == "") {
			this.snackBar.open("Please Enter Title", "X", {duration: 2000});  		
  	}else if(product == ""){
			this.snackBar.open("Please Enter Product", "X", {duration: 2000});
  	}else if(product_description == ""){
			this.snackBar.open("Please Enter Product Description", "X", {duration: 2000});
  	}else{
  		this.selectedTab = 1; 
  		this.scroll(10);
  	}
  }

  sendSpecificRequest(title, product, product_description, company, city, address, country, phone, email, contact, quantity, fax) {
  	if (title == "") {
			this.snackBar.open("Please Enter Title", "X", {duration: 2000});  		
			this.selectedTab = 0;
			this.scroll(10);
  	}else if(product == ""){
			this.snackBar.open("Please Enter Product", "X", {duration: 2000});
			this.selectedTab = 0;
			this.scroll(10);
  	}else if(product_description == ""){
			this.snackBar.open("Please Enter Product Description", "X", {duration: 2000});
			this.selectedTab = 0;
			this.scroll(10);
  	}else if(company == ""){
			this.snackBar.open("Please Enter Company Name", "X", {duration: 2000});
			this.selectedTab = 1;
  	}else if(city == ""){
			this.snackBar.open("Please Enter City", "X", {duration: 2000});
			this.selectedTab = 1;
  	}else if(address == ""){
			this.snackBar.open("Please Enter Address", "X", {duration: 2000});
			this.selectedTab = 1;
  	}else if(phone == ""){
			this.snackBar.open("Please Enter Phone", "X", {duration: 2000});
			this.selectedTab = 1;
  	}else if(email == ""){
			this.snackBar.open("Please Enter Email", "X", {duration: 2000});
			this.selectedTab = 1;
  	}else if(contact == ""){
			this.snackBar.open("Please Enter Contact", "X", {duration: 2000});
			this.selectedTab = 1;
  	}else{
  		this.dmessage = "Sending Please Wait ...";
	  	this.mS.sendSpecificRequest(title, product, product_description, company, city, address, country, phone, email, contact, quantity, fax).subscribe((r:any)=>{
	  		console.log(r);
	  		if (r == "Createed") {
	  			this.router.navigate(["/message/3"]);
	  			// alert("We Have Registered Your Request <br> We Would get back to you soon");
	  			// window.location.reload();
	  		}
	  	})
  		this.selectedTab = 1;
  	}
  }


  scroll(scrollDuration) {
	    var cosParameter = window.scrollY / 2,
	        scrollCount = 0,
	        oldTimestamp = performance.now();
	    function step (newTimestamp) {
	        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
	        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
	        if (window.scrollY === 0) return;
	        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
	        oldTimestamp = newTimestamp;
	        window.requestAnimationFrame(step);
	    }
	    window.requestAnimationFrame(step);
	}
  

}
