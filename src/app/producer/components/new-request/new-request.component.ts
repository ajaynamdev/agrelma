import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormControl} from '@angular/forms';



export interface Pokemon {
  value: string;
  viewValue: string;
}

export interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}




@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['../producer.style.css','./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  constructor(private mS:MainService, private router: Router) { }

  countries:any;
  countryGroup:any;
  currencies:any;

  sectors:any;
  selectedSector:any;

  sectorTypes:any;
  selectedSectorType:any;

  ngOnInit() {
  	window.scrollTo(0,0);
  	this.mS.sectors().subscribe((r:any)=>{
  		this.sectors = r;
  		// console.log(r);
  	})
  	this.mS.countryList().subscribe((r:any)=>{
  		// console.log(r);
  		this.countries = r;
  	})
  	this.mS.currencyList().subscribe((r:any)=>{
  		// console.log(r);
  		this.currencies = r;
  	})
  	this.mS.getCountryGroup().subscribe((r:any)=>{
  		// console.log(r);
  		let x  = 0;
  		let y = [];
  		for (var i of r) {
  			if (x != i.idgrupponazione) {
  				x = i.idgrupponazione;
  				// console.log(i);
  				let z = {
  					groupId: i.idgrupponazione,
  					groupName: i.nomegruppo,
  					countries: []
  				}
  				for (var j of r) {
  					if(x == j.idgrupponazione){
  						let con = {
  							cid : j.idnazione,
  							cname: j.paese
  						}
  						z.countries.push(con);
  					}
  				}
  				y.push(z);
  			}
  			// console.log(i);
  		}
  		console.log(y);
  		this.countryGroup = y;
  	})
  }

  selectSector(i){
  	this.selectedSector = i;
  	this.sectorType(i.idsettore);
  }

  sectorType($sectorId){
  	this.mS.sectorTypes($sectorId).subscribe((r:any)=>{
  		this.sectorTypes = r;
  		// console.log(r);
  	})
  }

  selectSectorTypes(i){
  	this.selectedSectorType = i;
  	// this.varietyType(i.idtipologia);
  }

  addSectorType($name){
    let $x = {
      'idtipologia': 'null',
      'nometipologia': $name
    }
    this.selectedSectorType = $x;
  }

  valuta = "EUR";


  pokemonControl = new FormControl();
  nazconsegna = "Italy";

}
