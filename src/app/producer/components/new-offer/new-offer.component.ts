import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['../producer.style.css','./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {

  constructor(private mS:MainService, private router: Router) { }


  countries:any;
  currencies:any;


  sectors:any;
  selectedSector:any;

  sectorTypes:any;
  selectedSectorType:any;

  varietyTypes:any;
  selectedVariety:any;

  meatCuts:any;
  selectedMeatcut:any;

  subVariety:any;
  selectedSubVariety:any;

  selectedCountry:any;

  addNewType:boolean = false;
  addNewVariety:boolean = false;
  addNewMeatCut:boolean = false;
  addNewSubVariety:boolean = false;


  ngOnInit() {
    window.scrollTo(0,0);
  	this.mS.sectors().subscribe((r:any)=>{
  		this.sectors = r;
  		console.log(r);
  	})
  	this.mS.countryList().subscribe((r:any)=>{
  		console.log(r);
  		this.countries = r;
  	})
  	this.mS.currencyList().subscribe((r:any)=>{
  		console.log(r);
  		this.currencies = r;
  	})

  }




  selectSector(i){
  	this.selectedSector = i;
    if(i.idsettore == '6' || i.idsettore == '12' || i.idsettore == '18' || i.idsettore == '4' || i.idsettore == '9'){
      this.getTypeByCountry();
    }else{
      this.sectorType(i.idsettore);
    }
  }

  sectorType($sectorId){
  	this.mS.sectorTypes($sectorId).subscribe((r:any)=>{
  		this.sectorTypes = r;
  		console.log(r);
  	})
  }

  selectSectorTypes(i){
  	this.selectedSectorType = i;
  	this.varietyType(i.idtipologia);
    if(this.selectedSector.idsettore == '6' || this.selectedSector.idsettore == '12' || this.selectedSector.idsettore == '18' || this.selectedSector.idsettore == '4' || this.selectedSector.idsettore == '9'){
      let country = this.nazione;
      for (var x of this.countries) {
        if (x.idnazione == country) {
          this.selectedCountry = x;
          break;
        }
      }
    }
  }


  addSectorType($name){
    let $x = {
      'idtipologia': 'null',
      'nometipologia': $name
    }
    this.selectedSectorType = $x;
    this.varietyTypes = [];
    if(this.selectedSector.idsettore == '6' || this.selectedSector.idsettore == '12' || this.selectedSector.idsettore == '18' || this.selectedSector.idsettore == '4' || this.selectedSector.idsettore == '9'){
      let country = this.nazione;
      for (var x of this.countries) {
        if (x.idnazione == country) {
          this.selectedCountry = x;
          break;
        }
      }
    }
  }


  varietyType($typeId){
  	this.mS.sectorVariety($typeId).subscribe((r:any)=>{
  		this.varietyTypes = r;
  		console.log(r);
  	})
  }

  selectVariety(i){
  	this.selectedVariety = i;
  	if(this.selectedSector.idsettore == '15'){
      this.meatCut(i.idvarieta);
    }
    if(this.selectedSector.idsettore == '3' || this.selectedSector.idsettore == '15'){
	  	this.subVarietyType(i.idvarieta);
  	}

  }

  addVarietyType($name){
    let $x = {
      'idvarieta': 'null',
      'nomevarieta': $name
    }
    this.selectedVariety = $x;
    this.meatCuts = [];
    this.subVariety = [];
  }

  skipVarietyType(){
    let $x = {
      'idvarieta': '0',
      'nomevarieta': ''
    }
    this.selectedVariety = $x;
    this.meatCuts = [];
  }

  meatCut($id){
  	this.mS.meatCut($id).subscribe((r:any)=>{
  		this.meatCuts = r;
  		console.log(r);
  	})
  }

  subVarietyType($id){
    this.mS.meatCut($id).subscribe((r:any)=>{
      this.subVariety = r;
      console.log(r);
    })
  }

  selectSubVariety(i){
    this.selectedSubVariety = i;
  }

  addNewSubVarietyType($name){
    let $x = {'nomesottovarieta': $name, 'idsottovarieta': 'null'}
    this.selectedSubVariety = $x;
  }

  skipSubVariety(){
    let $x = {'nomesottovarieta': '', 'idsottovarieta': '0'}
    this.selectedSubVariety = $x;
  }

  selectMeatCut(i){
  	this.selectedMeatcut = i;
  }


  getTypeByCountry(){
    let sectorid = this.selectedSector.idsettore;
    let countryid = this.nazione;
    this.mS.getTypeByCountry(sectorid, countryid).subscribe((r:any)=>{
      console.log(r);
      this.sectorTypes = r;
    })
  }


   
  valuta = "EUR";
  nazione = 59;  //idnazione (Country Id)
  nazconsegna = "Italy";
  quantita = "";
  unitamisura = "";
  umprezzoper = "";
  descrizione = "";
  imballo = "";
  titolo = "";
  modpag = "";
  nomeprodotto = "";
  prezzoper = "";
  luogoconsegna = "";
  biologico = "";
  ordineminimo = "";
  qualita = "";
  certificazioni = "";
  prezzo = "";
  campioni = "";
  sottovarieta = "";


 /*****************************
  * Special Sector data input *
  *****************************/

  TipoF = "1";
  TipoL = "1";
  Pasta = "1";
  Latte = "";
  Grasso = "";
  Acqua = "";
  Sapore = "";
  Colore = "";
  DurataS = "";
  DurataC = "";
  Confezione = "";

  TipoP = "1";

  Oliva = "1";
  Olio = "1";
  Odore = "";
  Acidita = "";
  Confezionato = "";



  Vino = "2";
  Profumo = "";
  Tenore = "";
  Zucchero = "";
  Vendemmia = "";
  Durata = "";

 /*********************************
  * Special Sector data input End *
  *********************************/





  format = {
    "coddomoff": "",         //reqoffcode (Generate from function with prefix 'O')
    "anagrafica": "",        //registry (Get user id from token)
    "datascad": "",          //expirationdate (Put by default '00000000')
    "datains": "",           //insertiondate (Date Of insertion in 'YYYYMMDD')
    "stato": "",             //status ('A')
    "tipo": "",         //type ('O')
    "settore": "",       //sector ('Sector Id')
    "tipologia": "",     //typology ('Type Id')
    "varieta": "",       //variety ('Variety')
    "sottovarieta": "",     //subvariety ('Not for normal set '0')
    "nazione": "",       //country (produced in country (id))s
    "numtotclick": "",     //clicktotnumb ('0')
    "valore": "",       //value ('0.01')
    "ha_img": "",       //has_img ('0')
    "prezzoxqta": "",     //pricexqty (set empty as not implementing '')
    "quantita": "",       //quantity (Value from the available quantity field)
    "unitamisura": "",     //unitofmeasure (Value from unit of measurement field for minimum order)
    "umprezzoper": "",     //uompricefor (Value from unit of measurement field for preffered price )
    "valuta": "",       //currency ( Value from currency ex 'EUR')
    "descrizione": "",     //description (Value from description field)
    "imballo": "",       //packaging (Value from Packages field)
    "titolo": "",       //title (Value from Offer Title field)
    "modpag": "",       //methodpayment (Value from Preffered way of payment field)
    "nomeprodotto": "",     //productname (Value from Trademark Field)
    "prezzoper": "",     //pricefor (Value from frice freffered to price filed)
    "luogoconsegna": "",   //deliveryplace (Value from Origin input field)
    "nazconsegna": "",     //deliverycountry ( Country Nane from Origin Country select field )
    "biologico": "",     //biological (Organic Product field value '0' or '1')
    "ordineminimo": "",     //minimumorder (Value of minimum order input field)
    "qualita": "",       //quality (Value of quality field)
    "certificazioni": "",   //certifications (Value Of certificate field)
    "caragg": "",       //additfeatures ('' for general offers)
    "prezzo": "",       //price (value of price input field)
    "campioni": ""       //samples (Value of sample field '0' or '1')
  };

  insertOffer(){

    let settore = this.selectedSector.idsettore;
    let tipologia = this.selectedSectorType.idtipologia;
    let varieta = this.selectedVariety?this.selectedVariety.idvarieta:'0';
    let nazione = this.nazione;
    let nazconsegna = this.nazconsegna;
    let valuta = this.valuta;
    let quantita = this.quantita;
    let unitamisura = this.unitamisura;
    let umprezzoper = this.umprezzoper;
    let descrizione = this.descrizione;
    let imballo = this.imballo;
    let titolo = this.titolo;
    let modpag = this.modpag;
    let nomeprodotto = this.nomeprodotto;
    let prezzoper = this.prezzoper;
    let luogoconsegna = this.luogoconsegna;
    let biologico = this.biologico?'1':'0';
    let ordineminimo = this.ordineminimo;
    let qualita = this.qualita;
    let certificazioni = this.certificazioni;
    let prezzo = this.prezzo;
    let campioni = this.campioni?'1':'0';
    let newTypeName = this.selectedSectorType.nometipologia;
    let newVarietyName = this.selectedVariety?this.selectedVariety.nomevarieta:'';
    let sottovarieta = this.selectedSubVariety?this.selectedSubVariety.idsottovarieta:'0';
    let newSubVarietyName = this.selectedSubVariety?this.selectedSubVariety.nomesottovarieta:'null';


    let TipoF = this.TipoF;
    let TipoL = this.TipoL;
    let Pasta = this.Pasta;
    let Latte = this.Latte;
    let Grasso = this.Grasso;
    let Acqua = this.Acqua;
    let Sapore = this.Sapore;
    let Colore = this.Colore;
    let DurataS = this.DurataS;
    let DurataC = this.DurataC;
    let Confezione = this.Confezione;

    let TipoP = this.TipoP;

    let Oliva = this.Oliva;
    let Olio = this.Olio;
    let Odore = this.Odore;
    let Acidita = this.Acidita;
    let Confezionato = this.Confezionato;

    let Vino = this.Vino;
    let Profumo = this.Profumo;
    let Tenore = this.Tenore;
    let Zucchero = this.Zucchero;
    let Vendemmia = this.Vendemmia;
    let Durata = this.Durata;



    console.log(settore);
    console.log(tipologia);
    console.log(varieta);
    console.log(nazione);
    console.log(nazconsegna);
    console.log(valuta);
    console.log(quantita);
    console.log(unitamisura);
    console.log(umprezzoper);
    console.log(descrizione);
    console.log(imballo);
    console.log(titolo);
    console.log(modpag);
    console.log(nomeprodotto);
    console.log(prezzoper);
    console.log(luogoconsegna);
    console.log(biologico);
    console.log(ordineminimo);
    console.log(qualita);
    console.log(certificazioni);
    console.log(prezzo);
    console.log(campioni);
    console.log(TipoP);
    this.mS.insertNewOffer(settore, tipologia, varieta, nazione, nazconsegna, valuta, quantita, unitamisura, umprezzoper, descrizione, imballo, titolo, modpag, nomeprodotto, prezzoper, luogoconsegna, biologico, ordineminimo, qualita, certificazioni, prezzo, campioni, newTypeName, newVarietyName, sottovarieta, newSubVarietyName,
      TipoF,TipoL,Pasta,Latte,Grasso,Acqua,Sapore,Colore,DurataS,DurataC,Confezione,
      TipoP,
      Oliva,Olio,Odore,Acidita,Confezionato,
      Vino,Profumo,Tenore,Zucchero,Vendemmia,Durata
      ).subscribe((r:any)=>{
      console.log(r);
      if (r.status=='1') {
        this.router.navigate(['/admin/producer/add-files/'+r.offerid]);
      }
    })
  }






}
