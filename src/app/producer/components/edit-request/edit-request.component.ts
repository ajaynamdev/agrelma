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
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['../producer.style.css','./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {

  constructor(private mS:MainService, private router: Router, private route: ActivatedRoute) { }

  countries:any;
  countryGroup:any;
  currencies:any;

  sectors:any;
  selectedSector:any;

  sectorTypes:any;
  selectedSectorType:any;
  vcont:any = [];
  vcontt:any = [];

  varietyTypes:any;
  selectedVariety:any = {
    idvarieta: ' ',
    nomevarieta: ' '
  };

  OfferId:any;
  offerdetail:any;

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


    this.route.paramMap.subscribe((r:any)=>{
      console.log("Offer Id = "+r.params.id);
      this.OfferId = r.params.id;
      this.mS.getFileDetails(this.OfferId).subscribe((r:any)=>{
        console.log(r);
        this.offerdetail = r.offerdetail[0];
        console.log(this.offerdetail.settore);
        let x = false;
        for (var i of this.sectors) {
          if (i.idsettore == this.offerdetail.settore) {
            this.selectSector(i);
            break;
          }
        }
        console.log(this.offerdetail.tipologia);


        this.valuta = this.offerdetail.valuta
        this.nazione = this.offerdetail.nazione
        this.nazconsegna = this.offerdetail.nazconsegna
        this.unitamisura = this.offerdetail.unitamisura
        this.umprezzoper = this.offerdetail.umprezzoper
        this.descrizione = this.offerdetail.descrizione
        this.imballo = this.offerdetail.imballo
        this.titolo = this.offerdetail.titolo
        this.modpag = this.offerdetail.modpag
        this.prezzoper = this.offerdetail.prezzoper
        this.luogoconsegna = this.offerdetail.luogoconsegna
        this.biologico = this.offerdetail.biologico
        this.ordineminimo = this.offerdetail.ordineminimo
        this.prezzo = this.offerdetail.prezzo
        this.prezzo2 = this.offerdetail.prezzo2
        this.datains = this.offerdetail.datains;
        this.coddomoff = this.offerdetail.coddomoff;

        

        // for (var i of this.sectorTypes) {
        //   if (i.idtipologia == this.offerdetail.tipologia) {
        //     this.selectSectorTypes(i);
        //   }
        // }



        // Special sector details 
        console.log(this.offerdetail.caragg);
        let caragg = this.offerdetail.caragg;
        let caraggarr = caragg.split("|");
        for (var i:any = 0; i < caraggarr.length; ++i) {
          
          if (caraggarr[i] == '{TipoF}') {
            this.TipoF = caraggarr[i+1];
          }
          
          if (caraggarr[i] == '{Confezione}') {
            this.Confezione = caraggarr[i+1];
          }
          if (caraggarr[i] == '{TipoP}') {
            this.TipoP = caraggarr[i+1];
          }
          if (caraggarr[i] == '{Oliva}') {
            this.Oliva = caraggarr[i+1];
          }
          if (caraggarr[i] == '{Olio}') {
            this.Olio = caraggarr[i+1];
          }
          if (caraggarr[i] == '{Confezionato}') {
            this.Confezionato = caraggarr[i+1];
          }
          if (caraggarr[i] == '{Vino}') {
            this.Vino = caraggarr[i+1];
          }
          console.log(caraggarr[i]);
        }
        // console.log(caragg.split("|"));

        this.mS.domoffnazioni(this.OfferId).subscribe((r:any)=>{
          let x = r[0].paesi;
          x = x.split(';')
          for (var i of x) {
            if (i.charAt(0) == 'N') {
              // console.log(i.charAt(0));
              console.log(i.substr(1));
              this.vcont.push(parseInt(i.substr(1)));

            }else if (i.charAt(0) == 'G'){
              this.vcontt.push(parseInt(i.substr(1)));
            }
          }
          // console.log(x);
        });



      })
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
      for (var i of this.sectorTypes) {
        if (i.idtipologia == this.offerdetail.tipologia) {
          this.selectSectorTypes(i);
        }
      }
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

  coddomoff:any = 0;
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
  datains = "";




  /*****************************
  * Special Sector data input *
  *****************************/

  Oliva = "1";
  Olio = "1";
  Confezione = "";
  Confezionato = "";
  Congelato = false;
  TipoP = "1";
  Vino = "2";
  TipoF = "1";


  /*********************************
  * Special Sector data input End *
  *********************************/


  insertRequest(){
    let settore = this.selectedSector.idsettore;
    let tipologia = this.selectedSectorType?this.selectedSectorType.idtipologia:'0';
    let varieta = this.selectedVariety?this.selectedVariety.idvarieta:'0';
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
    let newTypeName = this.selectedSectorType?this.selectedSectorType.nometipologia:' ';
    let newVarietyName = this.selectedVariety?this.selectedVariety.nomevarieta:' ';


    // console.log( this.mknation(this.vcont, 'N') + this.mknation(this.vcontt, 'G'));
    let countrylist = this.mknation(this.vcont, 'N') + this.mknation(this.vcontt, 'G');








    let Oliva = this.Oliva;
    let Olio = this.Olio;
    let Confezione = this.Confezione;
    let Confezionato = this.Confezionato;
    let Congelato = this.Congelato?'1':'0';
    let TipoP = this.TipoP;
    let Vino = this.Vino;
    let TipoF = this.TipoF;
    let datains = this.datains;
    let coddomoff = this.coddomoff;

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

    // console.log(Congelato);

    this.mS.editRequest(coddomoff,datains, settore, tipologia, varieta, nazione, nazconsegna, valuta,  unitamisura, umprezzoper, descrizione, imballo, titolo, modpag,  prezzoper, luogoconsegna, biologico, ordineminimo, prezzo, prezzo2, newTypeName, newVarietyName, countrylist,
      Oliva,Olio,Confezione,Confezionato,Congelato,TipoP,Vino,TipoF).subscribe((r:any)=>{
      console.log(r);
      if (r=='11') {
        this.router.navigate(['/admin/producer/offer-request']);
      }
    })

    // console.log(this.vcont);
    // console.log(this.vcontt);
    
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
