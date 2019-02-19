import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MainService} from '../../services/main.service';
import { Router }      from '@angular/router';

@Component({
  selector: 'app-present-online',
  templateUrl: './present-online.component.html',
  styleUrls: ['./present-online.component.css']
})
export class PresentOnlineComponent implements OnInit {

  constructor(public mS:MainService, 
  	public router: Router,) { }

  ngOnInit() {
  	this.mS.countryList().subscribe((r:any)=>{
  		console.log(r);
  		this.countryList = r;
  		this.isLoded = true;
  	})
  }

  test(){
  	console.log("testing");
  }

  selSec = [];

  addSec(i){
  	if (this.selSec.indexOf(i) == -1) {
  		this.selSec.push(i);
  	}else{
  		this.selSec.splice(this.selSec.indexOf(i), 1);
  	}
  	this.makeActSet();
  	console.log(this.selSec);
  }

  socialContact = [1];
  sectors = [
		{
			"id": "1",
			"name": "WINES AND LIQUORS",
			"sub": ["Quality Wine", "Table Wine", "Liquors"]
		},
		{
			"id": "2",
			"name": "OIL AND OLIVES",
			"sub": ["Oil", "Olives", "Oil Seeds"]
		},
		{
			"id": "16",
			"name": "FISH AND SEAFOOD",
			"sub": ["Fish and Seafood", "Crostacea and Mollusca", "Packed Fisheries"]
		},
		{
			"id": "3",
			"name": "MEAT AND CURED PORK",
			"sub": ["Cured Pork", "Meat"]
		},
		{
			"id": "4",
			"name": "FRUITS AND VEGE.",
			"sub": ["Fruits","Citrus","Vegetables","Packed Fruit and Vegetables"]
		},
		{
			"id": "3",
			"name": "PASTA",
			"sub": []
		},
		{
			"id": "4",
			"name": "DELICATESSEN",
			"sub": []
		},
		{
			"id": "7",
			"name": "PRESERVES",
			"sub": []
		},
		{
			"id": "8",
			"name": "SWEETS AND DOUGH PRODUCTS",
			"sub": []
		},
		{
			"id": "9",
			"name": "CHEESE",
			"sub": []
		},
		{
			"id": "10",
			"name": "COFFEE",
			"sub": []
		},
		{
			"id": "11",
			"name": "DRINKS",
			"sub": []
		},
		{
			"id": "12",
			"name": "FROZEN PRODUCTS",
			"sub": []
		},
		{
			"id": "13",
			"name": "CEREALS",
			"sub": []
		},
		{
			"id": "14",
			"name": "CONVENIENCE FOOD/READY MEALS",
			"sub": []
		},
		{
			"id": "15",
			"name": "VINEGAR",
			"sub": []
		}
  ];
  activitySector = 
	[
		{'id':'3', 'name':'Cereals'},
		{'id':'6', 'name':'Cheese'},
		{'id':'8', 'name':'Citrus'},
		{'id':'29', 'name':'Coffee'},
		{'id':'30', 'name':'Convenience food/ready meals'},
		{'id':'10', 'name':'Crostacea and Mollusca'},
		{'id':'24', 'name':'Cured Pork'},
		{'id':'19', 'name':'Delicatessen'},
		{'id':'11', 'name':'Drinks'},
		{'id':'2', 'name':'Fish and Seafood'},
		{'id':'32', 'name':'Frozen products'},
		{'id':'1', 'name':'Fruits'},
		{'id':'23', 'name':'Liquors'},
		{'id':'15', 'name':'Meat'},
		{'id':'12', 'name':'Oil'},
		{'id':'22', 'name':'Oil Seeds'},
		{'id':'18', 'name':'Olives'},
		{'id':'21', 'name':'Packed Fisheries'},
		{'id':'20', 'name':'Packed Fruit and Vegetables'},
		{'id':'27', 'name':'Pasta'},
		{'id':'26', 'name':'Preserves'},
		{'id':'4', 'name':'Quality Wine'},
		{'id':'28', 'name':'Sweets and dough products'},
		{'id':'9', 'name':'Table Wine'},
		{'id':'7', 'name':'Vegetables'},
		{'id':'31', 'name':'Vinegar'}
	]
  selectedTab = 0;
  countryList :any;
  isLoded:boolean = false;
  NumSettori = 26;


  Azienda = new FormControl(''); 	// Company Name
  Email = new FormControl(''); //Email
  Stato = new FormControl(''); //Country
  txtUsername = new FormControl(''); // Username
  txtPassword = new FormControl(''); // Password
  txtPassword2 = new FormControl(''); //Repeat Password
  Indirizzo = new FormControl(''); //Address
  Citta = new FormControl(''); //City
  CAP = new FormControl(''); //PoBOX
  Telefono = new FormControl(''); // Phone
  Fax = new FormControl(''); //FAX
  IndWeb = new FormControl(''); // Website
  Contatto = new FormControl(''); // Contact
  SettPrinc = new FormControl(''); // Main Sector
  Descrizione = new FormControl(''); // Company Description
  Impiegati = new FormControl(''); // Number of employees
  AnnoInizio = new FormControl(''); // Year Established
  LegaleRappresentante = new FormControl(''); //Legal Representative/Business Owner:
  ClientePrincipale = new FormControl(''); //Main Customer:
  VolumeVendite = new FormControl(''); //Total Annual Sales Volume:
  PercentualeEsportazione = new FormControl(''); //Export Percentage
  VolumeAcquisti = new FormControl(''); //Total Annual Purchase Volume
  Vende = new FormControl(''); //Products/Services: (Sold)
  Compra = new FormControl(''); //Products/Services: (Purchased)
  SettAgg = '';


  makeActSet(){
  	let x = ';';
  	for (var i of this.selSec) {
  		x = x+i+';';
  	}
  	console.log(x);
  	this.SettAgg = x;
  }


  signup(){
  	if(!this.step1(true)){
  		return;
  	}
  	if(!this.step2(true)){
  		return;
  	}

  	this.mS.checkUsername(this.txtUsername.value).subscribe((r:any)=>{
		if (r == 1) {
			alert("This username already exist")
			this.selectedTab = 0;
			return false;
		}else{
			this.mS.signup(this.Azienda.value,
		    this.Email.value,
		    this.Stato.value,
		    this.SettPrinc.value,
		    this.SettAgg,
		    this.txtUsername.value,
		    this.txtPassword.value,
		    this.txtPassword2.valid,
		    this.Telefono.value,
		    this.Indirizzo.value,
		    this.Citta.value,
		    this.CAP.value,
		    this.Fax.value,
		    this.IndWeb.value,
		    this.Contatto.value,
		    this.Descrizione.value).subscribe((r:any)=>{
		    	console.log(r);
		    	if (r) {
		    		alert("You are registered successfully Now you can login with usernane and password you Entered");
		    		this.router.navigate(['/login']);
		    	}
		    });
		}
	});

  	
  }

  step1($check=false){
	if(this.Azienda.value == '' ||
		this.Email.value == '' ||
		this.Stato.value == '' ||
		this.txtUsername.value == '' ||
		this.txtPassword.value == '' ||
		this.txtPassword2.value == ''){
		alert("All Fields Are Mandatory")
		if ($check) {
			this.selectedTab = 0;
		}
		return false;
	}else if(this.txtPassword.value != this.txtPassword2.value){
		alert('Password do not match');
		if ($check) {
			this.selectedTab = 0;
		}
		return false;
	}
	else{
		
		if (!$check) {
			this.selectedTab = 1;
		}
		this.scroll(10);
		return true;
		
	}
  }

  step2($check=false){
  	if(this.Indirizzo.value == '' ||
		this.Citta.value == '' ||
		this.Telefono.value == '' ||
		this.Contatto.value == '' ||
		this.SettPrinc.value == '' ||
		this.Descrizione.value == ''){
		alert("Fields marked with * (astric) is Mandatory");
		if ($check) {
			this.selectedTab = 1;
		}
		return false;
	}else{
		if (!$check) {
			this.selectedTab = 2;
		}
		this.scroll(10);
		return true;
	}
  }




  addMore(){
  	this.socialContact.push((this.socialContact.length));
  }

  remove(i){
  	this.socialContact.splice(i, 1);
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
