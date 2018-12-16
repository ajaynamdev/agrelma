import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

	apiUrl="https://agrelma.vishalpandey.xyz/api/";
	localUrl="https://agrelma.vishalpandey.xyz/api/";
	// apiUrl="http://localhost:8000/api/";
	// localUrl="http://localhost:8000/api/";

  constructor(private http: HttpClient,) { }

  contactUs(company_name, contact, address, city, country, phone, fax, website, email, message) {
  	let tosent1 = new FormData();
		tosent1.append('company_name', company_name);
		tosent1.append('contact', contact);
		tosent1.append('address', address);
		tosent1.append('city', city);
		tosent1.append('country', country);
		tosent1.append('phone', phone);
		tosent1.append('fax', fax);
		tosent1.append('website', website);
		tosent1.append('email', email);
		tosent1.append('message', message);
		return this.http.post(this.apiUrl+"contactus",tosent1, {responseType: 'text'});
  }

  sendSpecificRequest(title, product, product_description, company, city, address, country, phone, email, contact, quantity, fax) {
  	let tosent1 = new FormData();
		tosent1.append('title', title);
		tosent1.append('product', product);
		tosent1.append('product_description', product_description);
		tosent1.append('company', company);
		tosent1.append('city', city);
		tosent1.append('address', address);
		tosent1.append('country', country);
		tosent1.append('phone', phone);
		tosent1.append('email', email);
		tosent1.append('contact', contact);
		tosent1.append('quantity', quantity);
		tosent1.append('fax', fax);
		return this.http.post(this.apiUrl+"specific-request",tosent1, {responseType: 'text'});
  }

  aSubs(company_name, address, city, country, po_box, phone, mobile, fax, email, contact, website, vat, sectors, services_opted, amount, payment_method, is_newsletter, is_buyersreq) {
  	let tosent1 = new FormData();
		tosent1.append('company_name', company_name);
		tosent1.append('address', address);
		tosent1.append('city', city);
		tosent1.append('country', country);
		tosent1.append('po_box', po_box);
		tosent1.append('phone', phone);
		tosent1.append('mobile', mobile);
		tosent1.append('fax', fax);
		tosent1.append('email', email);
		tosent1.append('contact', contact);
		tosent1.append('website', website);
		tosent1.append('vat', vat);
		tosent1.append('sectors', sectors);
		tosent1.append('services_opted', services_opted);
		tosent1.append('amount', amount);
		tosent1.append('payment_method', payment_method);
		tosent1.append('is_newsletter', is_newsletter);
		tosent1.append('is_buyersreq', is_buyersreq);
		return this.http.post(this.apiUrl+"subscription",tosent1, {responseType: 'text'});
  }


  getOffer($id){
  	return this.http.get(this.localUrl+"voffer/"+$id);
  }
  getPhoto($id){
  	return this.http.get(this.localUrl+"vphoto/"+$id);
  }

  getOfferList($id, $pid=null, $countryId=0, $typeId=0){
  	if ($pid) {
	  	return this.http.get(this.localUrl+"getoffers/"+$id+"/"+$pid+"/"+$countryId+"/"+$typeId);
  	}else{
	  	return this.http.get(this.localUrl+"getoffers/"+$id);
  	}
  }
  getOfferSearch($id='%', $pid=null, $countryId=0, $typeId=0, $q=""){
  	if ($pid) {
	  	return this.http.get(this.localUrl+"searchoffers/"+$id+"/"+$pid+"/"+$countryId+"/"+$typeId+"/"+$q);
  	}else{
	  	return this.http.get(this.localUrl+"searchoffers/"+$id+"/1/%/%/"+$q);
  	}
  }


  getRequestList($id, $pid=null, $typeId=0){
  	let countryId = 139;
  	if ($pid) {
  		return this.http.get(this.localUrl+"getrequests/"+$id+"/"+countryId+"/"+$pid+"/"+$typeId);
  	}else{
  		return this.http.get(this.localUrl+"getrequests/"+$id+"/"+countryId+"/1");
  	}
  }

  getProducerCompany($id){
  	return this.http.get(this.localUrl+"getcompany/"+$id);
  }


  showcase(){
  	return this.http.get(this.localUrl+"showcase");
  }

  latestoffer(){
  	return this.http.get(this.localUrl+"latestoffers");
  }

  latestrequests(){
  	return this.http.get(this.localUrl+"latestrequests");
  }




}
