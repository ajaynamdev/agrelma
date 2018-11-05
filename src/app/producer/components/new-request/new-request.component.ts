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
  vcont:any;
  vcontt:any;

  varietyTypes:any;
  selectedVariety:any = {
    idvarieta: ' ',
    nomevarieta: ' '
  };

  addNewType:boolean = false;
  addNewVariety:boolean = false;

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
  nazione = 59;  //idnazione (Country Id)
  nazconsegna = "Italy";
  unitamisura = "";
  umprezzoper = "";
  descrizione = "";
  imballo = "";
  titolo = "";
  modpag = "";
  prezzoper = "";
  luogoconsegna = "";
  biologico = "";
  ordineminimo = "";
  prezzo = "";
  prezzo2 = "";


  insertRequest(){
    let settore = this.selectedSector.idsettore;
    let tipologia = this.selectedSectorType.idtipologia;
    let varieta = this.selectedVariety.idvarieta;
    let nazione = this.nazione;
    let nazconsegna = this.nazconsegna;
    let valuta = this.valuta;
    let unitamisura = this.unitamisura;
    let umprezzoper = this.umprezzoper;
    let descrizione = this.descrizione;
    let imballo = this.imballo;
    let titolo = this.titolo;
    let modpag = this.modpag;
    let prezzoper = this.prezzoper;
    let luogoconsegna = this.luogoconsegna;
    let biologico = this.biologico?'1':'0';
    let ordineminimo = this.ordineminimo;
    let prezzo = this.prezzo;
    let prezzo2 = this.prezzo2;
    let newTypeName = this.selectedSectorType.nometipologia;
    let newVarietyName = this.selectedVariety.nomevarieta;


    // console.log( this.mknation(this.vcont, 'N') + this.mknation(this.vcontt, 'G'));
    let countrylist = this.mknation(this.vcont, 'N') + this.mknation(this.vcontt, 'G');

    // console.log(settore);
    // console.log(tipologia);
    // console.log(nazione);
    // console.log(nazconsegna);
    // console.log(valuta);
    // console.log(unitamisura);
    // console.log(umprezzoper);
    // console.log(descrizione);
    // console.log(imballo);
    // console.log(titolo);
    // console.log(modpag);
    // console.log(prezzoper);
    // console.log(luogoconsegna);
    // console.log(biologico);
    // console.log(ordineminimo);
    // console.log(prezzo);
    // console.log(prezzo2);
    // console.log(newTypeName);
    // console.log(newVarietyName);
    // console.log(this.vcont);
    this.mS.insertNewRequest(settore, tipologia, varieta, nazione, nazconsegna, valuta,  unitamisura, umprezzoper, descrizione, imballo, titolo, modpag,  prezzoper, luogoconsegna, biologico, ordineminimo, prezzo, prezzo2, newTypeName, newVarietyName, countrylist).subscribe((r:any)=>{
      console.log(r);
      if (r=='11') {
        this.router.navigate(['/admin/producer/offer-request']);
      }
    })
    
  }


  pokemonControl = new FormControl();

  mknation(arr:any = [], prefix){
    let r = '';
    if (prefix == 'N') {
      r = r+';';
    }
    for (var i of arr) {
      let x = prefix+i+';';
      r = r+x;
    }
    return r;
  }

}
