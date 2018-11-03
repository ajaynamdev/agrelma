import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import {MatSnackBar} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {


	bmessage = "Send Message";


  constructor(private mS:MainService,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute,
	  private router: Router,) { }

  ngOnInit() {
  }

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

  selectedSectors = [];

  countries = [
		{"value":"77", "content":"Albania"},
		{"value":"72", "content":"Andorra"},
		{"value":"1", "content":"Austria"},
		{"value":"99", "content":"Belarus"},
		{"value":"25", "content":"Belgium"},
		{"value":"86", "content":"Bosnia and Herzegovina"},
		{"value":"90", "content":"Bulgaria"},
		{"value":"134", "content":"Croatia"},
		{"value":"106", "content":"Cyprus"},
		{"value":"107", "content":"Czech Republic"},
		{"value":"108", "content":"Denmark"},
		{"value":"109", "content":"Estonia"},
		{"value":"119", "content":"Faroe Islands"},
		{"value":"115", "content":"Finland"},
		{"value":"35", "content":"France"},
		{"value":"2", "content":"Germany"},
		{"value":"124", "content":"Gibraltar"},
		{"value":"128", "content":"Greece"},
		{"value":"61", "content":"Holy See (Vatican City State)"},
		{"value":"135", "content":"Hungary"},
		{"value":"143", "content":"Iceland"},
		{"value":"137", "content":"Ireland"},
		{"value":"59", "content":"Italy"},
		{"value":"166", "content":"Latvia"},
		{"value":"161", "content":"Liechtenstein"},
		{"value":"165", "content":"Lithuania"},
		{"value":"41", "content":"Luxembourg"},
		{"value":"170", "content":"Macedonia, the Former Yugoslav Republic of"},
		{"value":"175", "content":"Malta"},
		{"value":"168", "content":"Moldova, Republic of"},
		{"value":"43", "content":"Monaco"},
		{"value":"248", "content":"Montenegro"},
		{"value":"183", "content":"Netherlands"},
		{"value":"184", "content":"Norway"},
		{"value":"193", "content":"Poland"},
		{"value":"68", "content":"Portugal"},
		{"value":"199", "content":"Romania"},
		{"value":"60", "content":"San Marino"},
		{"value":"261", "content":"Serbia"},
		{"value":"211", "content":"Slovakia"},
		{"value":"209", "content":"Slovenia"},
		{"value":"12", "content":"Spain"},
		{"value":"210", "content":"Svalbard and Jan Mayen"},
		{"value":"206", "content":"Sweden"},
		{"value":"102", "content":"Switzerland"},
		{"value":"224", "content":"Turkey"},
		{"value":"229", "content":"Ukraine"},
		{"value":"120", "content":"United Kingdom"},		
		{"value":"27", "content":"Canada"},
		{"value":"232", "content":"United States"},
		{"value":"78", "content":"Armenia"},
		{"value":"80", "content":"Asia-Pacific Region"},
		{"value":"85", "content":"Azerbaijan"},
		{"value":"88", "content":"Bangladesh"},
		{"value":"96", "content":"Bhutan"},
		{"value":"94", "content":"Brunei Darussalam"},
		{"value":"149", "content":"Cambodia"},
		{"value":"104", "content":"China"},
		{"value":"69", "content":"East Timor"},
		{"value":"122", "content":"Georgia"},
		{"value":"132", "content":"Hong Kong"},
		{"value":"139", "content":"India"},
		{"value":"136", "content":"Indonesia"},
		{"value":"146", "content":"Japan"},
		{"value":"157", "content":"Kazakstan"},
		{"value":"153", "content":"Korea, Democratic People's Republic of"},
		{"value":"154", "content":"Korea, Republic of"},
		{"value":"148", "content":"Kyrgyzstan"},
		{"value":"158", "content":"Laos Democratic Republic"},
		{"value":"66", "content":"Macau"},
		{"value":"179", "content":"Malaysia"},
		{"value":"177", "content":"Maldives"},
		{"value":"172", "content":"Mongolia"},
		{"value":"171", "content":"Myanmar (Burma)"},
		{"value":"185", "content":"Nepal"},
		{"value":"192", "content":"Pakistan"},
		{"value":"191", "content":"Philippines"},
		{"value":"200", "content":"Russian Federation"},
		{"value":"207", "content":"Singapore"},
		{"value":"162", "content":"Sri Lanka"},
		{"value":"227", "content":"Taiwan"},
		{"value":"220", "content":"Tajikistan"},
		{"value":"219", "content":"Thailand"},
		{"value":"222", "content":"Turkmenistan"},
		{"value":"233", "content":"Uzbekistan"},
		{"value":"237", "content":"Vietnam"},
		{"value":"74", "content":"Afghanistan"},
		{"value":"91", "content":"Bahrain"},
		{"value":"142", "content":"Iran, Islamic Republic of"},
		{"value":"141", "content":"Iraq"},
		{"value":"138", "content":"Israel"},
		{"value":"145", "content":"Jordan"},
		{"value":"155", "content":"Kuwait"},
		{"value":"159", "content":"Lebanon"},
		{"value":"189", "content":"Oman"},
		{"value":"195", "content":"Palestinian Territory, Occupied"},
		{"value":"197", "content":"Qatar"},
		{"value":"202", "content":"Saudi Arabia"},
		{"value":"216", "content":"Syrian Arab Republic"},
		{"value":"73", "content":"United Arab Emirates"},
		{"value":"240", "content":"Yemen"},
		{"value":"100", "content":"Belize"},
		{"value":"7", "content":"Costa Rica"},
		{"value":"22", "content":"El Salvador"},
		{"value":"14", "content":"Guatemala"},
		{"value":"15", "content":"Honduras"},
		{"value":"16", "content":"Mexico"},
		{"value":"17", "content":"Nicaragua"},
		{"value":"18", "content":"Panama"},
		{"value":"160", "content":"Saint Lucia"},
		{"value":"3", "content":"Argentina"},
		{"value":"4", "content":"Bolivia"},
		{"value":"63", "content":"Brazil"},
		{"value":"5", "content":"Chile"},
		{"value":"6", "content":"Colombia"},
		{"value":"11", "content":"Ecuador"},
		{"value":"117", "content":"Falkland Islands (Malvinas)"},
		{"value":"38", "content":"French Guiana"},
		{"value":"131", "content":"Guyana"},
		{"value":"21", "content":"Paraguay"},
		{"value":"19", "content":"Peru"},
		{"value":"129", "content":"South Georgia and the South Sandwich Islands"},
		{"value":"214", "content":"Suriname"},
		{"value":"23", "content":"Uruguay"},
		{"value":"24", "content":"Venezuela"},
		{"value":"83", "content":"Australia"},
		{"value":"82", "content":"American Samoa"},
		{"value":"105", "content":"Christmas Island"},
		{"value":"101", "content":"Cocos (Keeling) Islands"},
		{"value":"103", "content":"Cook Islands"},
		{"value":"116", "content":"Fiji"},
		{"value":"50", "content":"French Polynesia"},
		{"value":"130", "content":"Guam"},
		{"value":"150", "content":"Kiribati"},
		{"value":"169", "content":"Marshall Islands"},
		{"value":"118", "content":"Micronesia, Federated States of"},
		{"value":"186", "content":"Nauru"},
		{"value":"48", "content":"New Caledonia"},
		{"value":"188", "content":"New Zealand"},
		{"value":"187", "content":"Niue"},
		{"value":"181", "content":"Norfolk Island"},
		{"value":"173", "content":"Northern Mariana Islands"},
		{"value":"196", "content":"Palau"},
		{"value":"190", "content":"Papua New Guinea"},
		{"value":"194", "content":"Pitcairn"},
		{"value":"239", "content":"Samoa"},
		{"value":"203", "content":"Solomon Islands"},
		{"value":"221", "content":"Tokelau"},
		{"value":"223", "content":"Tonga"},
		{"value":"218", "content":"Turks and Caicos Islands"},
		{"value":"226", "content":"Tuvalu"},
		{"value":"57", "content":"Vanuatu"},
		{"value":"238", "content":"Wallis and Futuna"},
		{"value":"34", "content":"Algeria"},
		{"value":"62", "content":"Angola"},
		{"value":"26", "content":"Benin"},
		{"value":"98", "content":"Botswana"},
		{"value":"89", "content":"Burkina Faso"},
		{"value":"92", "content":"Burundi"},
		{"value":"32", "content":"Cameroon"},
		{"value":"242", "content":"Canary Islands"},
		{"value":"64", "content":"Cape Verde"},
		{"value":"29", "content":"Central African Republic"},
		{"value":"70", "content":"Ceuta"},
		{"value":"53", "content":"Chad"},
		{"value":"151", "content":"Comoros"},
		{"value":"30", "content":"Congo"},
		{"value":"28", "content":"Congo, The Democratic Republic of the"},
		{"value":"31", "content":"Côte d'Ivoire"},
		{"value":"33", "content":"Djibouti"},
		{"value":"110", "content":"Egypt"},
		{"value":"13", "content":"Equatorial Guinea"},
		{"value":"112", "content":"Eritrea"},
		{"value":"113", "content":"Ethiopia"},
		{"value":"37", "content":"Gabon"},
		{"value":"126", "content":"Gambia"},
		{"value":"123", "content":"Ghana"},
		{"value":"39", "content":"Guinea"},
		{"value":"65", "content":"Guinea-Bissau"},
		{"value":"147", "content":"Kenya"},
		{"value":"164", "content":"Lesotho"},
		{"value":"163", "content":"Liberia"},
		{"value":"167", "content":"Libyan Arab Jamahiriya"},
		{"value":"44", "content":"Madagascar"},
		{"value":"246", "content":"Madeira Islands"},
		{"value":"178", "content":"Malawi"},
		{"value":"45", "content":"Mali"},
		{"value":"47", "content":"Mauritania"},
		{"value":"176", "content":"Mauritius"},
		{"value":"241", "content":"Mayotte"},
		{"value":"247", "content":"Melilla"},
		{"value":"42", "content":"Morocco"},
		{"value":"67", "content":"Mozambique"},
		{"value":"180", "content":"Namibia"},
		{"value":"49", "content":"Niger"},
		{"value":"182", "content":"Nigeria"},
		{"value":"198", "content":"Réunion"},
		{"value":"201", "content":"Rwanda"},
		{"value":"71", "content":"Sahrawi Arab Democratic Republic"},
		{"value":"208", "content":"Saint Helena"},
		{"value":"215", "content":"São Tomé and Príncipe"},
		{"value":"52", "content":"Senegal"},
		{"value":"204", "content":"Seychelles"},
		{"value":"212", "content":"Sierra Leone"},
		{"value":"213", "content":"Somalia"},
		{"value":"243", "content":"South Africa"},
		{"value":"205", "content":"Sudan"},
		{"value":"217", "content":"Swaziland"},
		{"value":"228", "content":"Tanzania, United Republic of"},
		{"value":"55", "content":"Togo"},
		{"value":"56", "content":"Tunisia"},
		{"value":"230", "content":"Uganda"},
		{"value":"111", "content":"Western Sahara"},
		{"value":"58", "content":"Zaire"},
		{"value":"244", "content":"Zambia"},
		{"value":"245", "content":"Zimbabwe"},	
		{"value":"76", "content":"Anguilla"},
		{"value":"75", "content":"Antigua and Barbuda"},
		{"value":"84", "content":"Aruba"},
		{"value":"95", "content":"Bahamas"},
		{"value":"87", "content":"Barbados"},
		{"value":"93", "content":"Bermuda"},
		{"value":"249", "content":"Bonaire"},
		{"value":"250", "content":"British Virgin Islands"},
		{"value":"156", "content":"Cayman Islands"},
		{"value":"8", "content":"Cuba"},
		{"value":"251", "content":"Curaçao"},
		{"value":"9", "content":"Dominica"},
		{"value":"10", "content":"Dominican Republic"},
		{"value":"121", "content":"Grenada"},
		{"value":"127", "content":"Guadeloupe"},
		{"value":"40", "content":"Haiti"},
		{"value":"144", "content":"Jamaica"},
		{"value":"46", "content":"Martinique"},
		{"value":"174", "content":"Montserrat"},
		{"value":"79", "content":"Netherlands Antilles"},
		{"value":"20", "content":"Puerto Rico"},
		{"value":"252", "content":"Saba"},
		{"value":"253", "content":"Saint Barthélemy"},
		{"value":"234", "content":"Saint Vincent and the Grenadines"},
		{"value":"225", "content":"Trinidad and Tobago"},
		{"value":"235", "content":"Virgin Islands, British"},
		{"value":"236", "content":"Virgin Islands, U.S."},
	];


	showcase = 0;
	month = 400;
	base = this.showcase+this.month;
	foodimp = 0;
	foodpro = 0;
	wineimp = 0;
	winepro = 0;
	hi = false;
	serviceOpted = {
		"agrelmabase": true,
		"showcase": false,
		"twoMonth": false,
		"tweleveMonth": true,
		"foodImporterDirectory": false,
		"wineImporterDirectory": false,
		"foodProducerDirectory": false,
		"wineProducerDirectory": false
	}

	cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;

	test($event){
		console.log($event);
		if ($event.checked == false) {
			// this.base = 0;
			this.hi = false;
			this.cost = this.foodimp+this.foodpro+this.wineimp+this.winepro;
			this.serviceOpted.agrelmabase = false;
		}else if($event.checked == true){
			this.base = this.showcase+this.month;
			this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
			this.serviceOpted.agrelmabase = true;
		}
	}

	test1($event, x){
		if ($event.checked == false) {
			if (x == 'foodi') {
				this.foodimp = 0;
				this.serviceOpted.foodImporterDirectory = false;
				this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
			}else if(x == 'foodp'){
				this.foodpro = 0;
				this.serviceOpted.foodProducerDirectory = false;
				this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
			}else if(x == 'winei'){
				this.wineimp = 0;
				this.serviceOpted.wineImporterDirectory = false;
				this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
			}else if(x == 'winep'){
				this.winepro = 0;
				this.serviceOpted.wineProducerDirectory = false;
				this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
			}
		}else if ($event.checked == true) {
			if (x == 'foodi') {
				this.foodimp = 100;
				this.serviceOpted.foodImporterDirectory = true;
				this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
			}else if(x == 'foodp'){
				this.foodpro = 100;
				this.serviceOpted.foodProducerDirectory = true;
				this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
			}else if(x == 'winei'){
				this.wineimp = 100;
				this.serviceOpted.wineImporterDirectory = true;
				this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
			}else if(x == 'winep'){
				this.winepro = 100;
				this.serviceOpted.wineProducerDirectory = true;
				this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
			}
		}
	}

	test2($event){
		if ($event.checked == false) {
			this.showcase = 0;
			this.serviceOpted.showcase = false;
			this.base = this.showcase+this.month;
			this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
		}else if ($event.checked == true){
			this.showcase = 28;
			this.serviceOpted.showcase = true;
			this.base = this.showcase+this.month;
			this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
		}
	}

	test3($event){
		console.log($event);
		if ($event.value == '1') {
			this.month = 100;
			this.serviceOpted.twoMonth = true;
			this.serviceOpted.tweleveMonth = false;
			this.base = this.showcase+this.month;
			this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
		}else if($event.value == '2'){
			this.month = 400;
			this.serviceOpted.twoMonth = false;
			this.serviceOpted.tweleveMonth = true;
			this.base = this.showcase+this.month;
			this.cost = this.base+this.foodimp+this.foodpro+this.wineimp+this.winepro;
		}
	}




	right(a){
		this.selectedSectors = [];
		let i = 0;
		for(let x of a.options._results){
			if (x._selected) {
				this.selectedSectors.push(this.sectors[i])
			}
			i++
		}
	}

	left(a){
		let h = this.selectedSectors;
		this.selectedSectors = [];
		let i = 0;
		for(let x of a.options._results){
			if (!x._selected) {
				this.selectedSectors.push(h[i]);
			}
			i++
		}
	}

	addAll(){
		this.selectedSectors = this.sectors;
	}
	
	removeAll(){
		this.selectedSectors = [];
	}

	// paymentMethod = "credit_card";
	paymentMethod = "bank_transfer";

	aSubs(company_name, address, city, country, po_box, phone, mobile, fax, email, contact, website, vat, is_newsletter, is_buyersreq) {
		if(company_name == ""){
			this.snackBar.open("Please Enter Company Name", "x", {duration: 2000});
		}
		else if(address == ""){
			this.snackBar.open("Please Enter address", "x", {duration: 2000});
		}
		else if(city == ""){
			this.snackBar.open("Please Enter city", "x", {duration: 2000});
		}
		else if(country == ""){
			this.snackBar.open("Please Enter country", "x", {duration: 2000});
		}
		else if(phone == ""){
			this.snackBar.open("Please Enter phone", "x", {duration: 2000});
		}
		else if(email == ""){
			this.snackBar.open("Please Enter email", "x", {duration: 2000});
		}
		else if(contact == ""){
			this.snackBar.open("Please Enter contact", "x", {duration: 2000});
		}
		else if(vat == ""){
			this.snackBar.open("Please Enter vat", "x", {duration: 2000});
		}
		else{
			let sectors = JSON.stringify(this.selectedSectors);
			let services_opted = JSON.stringify(this.serviceOpted);
			let amount = this.cost;
			let payment_method = this.paymentMethod;
			if (is_newsletter) {
				is_newsletter = 1;
			}else{
				is_newsletter = 0;
			}

			if (is_buyersreq) {
				is_buyersreq = 1;
			}else{
				is_buyersreq = 0;
			}

			console.log( company_name );
			console.log( address );
			console.log( city );
			console.log( country );
			console.log( po_box );
			console.log( phone );
			console.log( mobile );
			console.log( fax );
			console.log( email );
			console.log( contact );
			console.log( website );
			console.log( vat );
			console.log( sectors );
			console.log( services_opted );
			console.log( amount );
			console.log( payment_method );
			console.log( is_newsletter );
			console.log( is_buyersreq );
 			this.mS.aSubs(company_name, address, city, country, po_box, phone, mobile, fax, email, contact, website, vat, sectors, services_opted, amount, payment_method, is_newsletter, is_buyersreq).subscribe((r:any)=>{
				console.log(r);
				if (r == "Createed") {
					this.router.navigate(["/message/2"]);
					// alert("Thanks for the subscription request please transfer money \n we would be in touch with you very soon");
					// window.location.reload();
				}
			})
		}
	}

}
