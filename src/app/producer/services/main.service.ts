import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  Authorization = this.cookieService.get('admin');

  // apiUrl = "https://agrelma.vishalpandey.xyz/api/admin/"
  apiUrl = "http://localhost:8000/api/admin/"
  // apiUrlPublic = "https://agrelma.vishalpandey.xyz/api/"
  apiUrlPublic = "http://localhost:8000/api/"

  getToken(){
  	console.log(this.Authorization);
  }

  getCompany(){
  	let tosent = new FormData();
    tosent.append('hello', 'Heloo');
    return this.http.post(this.apiUrl+'company', tosent, {headers:{'Authorization': this.Authorization}});
  }

  consumptionH(){
    let tosent = new FormData();
  	tosent.append('hello', 'Heloo');
  	return this.http.post(this.apiUrl+'comsumptionh', tosent, {headers:{'Authorization': this.Authorization}});
  }

  paymentH(){
    let tosent = new FormData();
    tosent.append('hello', 'Heloo');
    return this.http.post(this.apiUrl+'paymenth', tosent, {headers:{'Authorization': this.Authorization}});
  }

  selectedSector(){
    let tosent = new FormData();
    tosent.append('hello', 'Heloo');
    return this.http.post(this.apiUrl+'selectedsector', tosent, {headers:{'Authorization': this.Authorization}});
  }

  msgR(){
    let tosent = new FormData();
    tosent.append('hello', 'Heloo');
    return this.http.post(this.apiUrl+'msgr', tosent, {headers:{'Authorization': this.Authorization}});
  }

  msgS(){
    let tosent = new FormData();
    tosent.append('hello', 'Heloo');
    return this.http.post(this.apiUrl+'msgs', tosent, {headers:{'Authorization': this.Authorization}});
  }

  offers(){
    // 27509
    let tosent = new FormData();
    tosent.append('hello', 'Heloo');
    return this.http.post(this.apiUrl+'offers', tosent, {headers:{'Authorization': this.Authorization}});    
  }

  requests(){
    // 3463
    let tosent = new FormData();
    tosent.append('hello', 'Heloo');
    return this.http.post(this.apiUrl+'requests', tosent, {headers:{'Authorization': this.Authorization}});    
  }

  countryList(){
    return this.http.get(this.apiUrlPublic+"countrylist");
  }

  currencyList(){
    return this.http.get(this.apiUrlPublic+"currencylist");
  }

  sectors(){
    return this.http.get(this.apiUrlPublic+"sectors");
  }
  
  sectorTypes($sectorid){
    return this.http.get(this.apiUrlPublic+"sectortypes/"+$sectorid);
  }

  sectorVariety($typeid){
    return this.http.get(this.apiUrlPublic+"sectorvariety/"+$typeid);
  }

  meatCut($typeid){
    return this.http.get(this.apiUrlPublic+"meatcuts/"+$typeid);
  }

  getCountryGroup(){
    return this.http.get(this.apiUrlPublic+"nationgroup");
  }




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
  }

  insertNewOffer(settore, tipologia, varieta, nazione, nazconsegna, valuta, quantita, unitamisura, umprezzoper, descrizione, imballo, titolo, modpag, nomeprodotto, prezzoper, luogoconsegna, biologico, ordineminimo, qualita, certificazioni, prezzo, campioni, newTypeName, newVarietyName){
    let toSent = new FormData();
    toSent.append('settore',settore);
    toSent.append('tipologia',tipologia);
    toSent.append('varieta',varieta);
    toSent.append('nazione',nazione);
    toSent.append('nazconsegna',nazconsegna);
    toSent.append('valuta',valuta);
    toSent.append('quantita',quantita);
    toSent.append('unitamisura',unitamisura);
    toSent.append('umprezzoper',umprezzoper);
    toSent.append('descrizione',descrizione);
    toSent.append('imballo',imballo);
    toSent.append('titolo',titolo);
    toSent.append('modpag',modpag);
    toSent.append('nomeprodotto',nomeprodotto);
    toSent.append('prezzoper',prezzoper);
    toSent.append('luogoconsegna',luogoconsegna);
    toSent.append('biologico',biologico);
    toSent.append('ordineminimo',ordineminimo);
    toSent.append('qualita',qualita);
    toSent.append('certificazioni',certificazioni);
    toSent.append('prezzo',prezzo);
    toSent.append('campioni',campioni);
    toSent.append('newTypeName',newTypeName);
    toSent.append('newVarietyName',newVarietyName);
    return this.http.post(this.apiUrl+'insertoffer', toSent, {headers:{'Authorization': this.Authorization}});
  }
  
}