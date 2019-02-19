import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MainService } from '../../services/main.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../admin/services/auth.service';
declare var $:any;

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router,
  private mS:MainService,
  public cokkie:CookieService,
  public aS:AuthService) { }

  offer:boolean = false;
  offersearch:boolean = false;
  offerId:any;
  offerResult:any;
  pageId:any;
  request:boolean = false;
  requestsearch = false;
  requestId:any;
  requestResult:any;
  range:any;
  total:any;
  previousPage:any;
  nextPage:any;
  lastPage:any;
  pagination = [];
  query:any="";
  r:any;



  country:any;
  sectortype:any;

  countryId:any = 0;
  typeId:any = 0;

  ngOnInit() {
    window.scrollTo(0,0);
  	$.getScript("../../../assets/js/scripts.js", function() {
		});
    this.route.paramMap.subscribe((r:any)=>{
      this.r = r;
      console.log(r.params.id);
      console.log(r.params.qid);
      console.log(r.params.country);
      console.log(r.params.thetype);
      if (r.params.country) {
        this.countryId = r.params.country;
      }else{
        this.countryId = 0;
      }
      if (r.params.thetype) {
        this.typeId = r.params.thetype;
      }else{
        this.typeId = 0;
      }
      if (r.params.id == "offer") {
        this.offer = true;
        this.offerId = r.params.qid;
        this.pageId = r.params.pid;
        this.nextPage = +this.pageId+1;
        this.previousPage = +this.pageId-1;
        if (r.params.pid) {
          this.mS.getOfferList(this.offerId, this.pageId, this.countryId, this.typeId).subscribe((r:any)=>{
            window.scrollTo(0,0);
            console.log(r);
            this.offerResult = r.result;
            this.range = r.range;
            this.total = r.total;
            this.country = r.country;
            this.sectortype = r.type;
            let x = this.total/15;
            if (x%15 != 0) {
              x = x+1;
            }
            this.pagination = [];
            for (var i = 1; i <= x; i++) {
              this.pagination.push(i);
              this.lastPage = i;
            }
            console.log("Last Page = "+this.lastPage);
          })
        }else{
          this.pageId = 1;
          this.nextPage = +this.pageId+1;
          this.previousPage = +this.pageId-1;
          this.mS.getOfferList(this.offerId).subscribe((r:any)=>{
            window.scrollTo(0,0);
            console.log(r);
            this.offerResult = r.result;
            this.range = r.range;
            this.total = r.total;
            this.country = r.country;
            this.sectortype = r.type;
            let x = this.total/15;
            if (x%15 != 0) {
              x = x+1;
            }
            this.pagination = [];
            for (var i = 1; i <= x; i++) {
              this.pagination.push(i);
              this.lastPage = i;
            }
            console.log("Last Page = "+this.lastPage);
          })
        }
      }else if(r.params.id == "request"){
        this.request = true;
        this.requestId = r.params.qid;
        this.pageId = r.params.pid;
        this.nextPage = +this.pageId+1;
        this.previousPage = +this.pageId-1;
        if (r.params.pid) {
          console.log(r.params.pid);
          this.mS.getRequestList(this.requestId, this.pageId, this.typeId).subscribe((r:any)=>{
            window.scrollTo(0,0);
            console.log(r);
            this.requestResult = r.results;
            this.range = r.range;
            this.total = r.total;
            this.sectortype = r.type;
            let x = this.total/15;
            console.log(x);
            if (x%15 != 0) {
              x = x+1;
            }
            this.pagination = [];
            for (var i = 1; i <= x; i++) {
              this.pagination.push(i);
              this.lastPage = i;
            }
          })
        }else{
          this.pageId = 1;
          this.nextPage = +this.pageId+1;
          this.previousPage = +this.pageId-1;
          this.mS.getRequestList(this.requestId).subscribe((r:any)=>{
            window.scrollTo(0,0);
            console.log(r);
            this.requestResult = r.results;
            this.range = r.range;
            this.total = r.total;
            this.sectortype = r.type;
            let x = this.total/15;
            console.log(x);
            if (x%15 != 0) {
              x = x+1;
            }
            this.pagination = [];
            for (var i = 1; i <= x; i++) {
              this.pagination.push(i);
              this.lastPage = i;
            }
          })
        }
      }else if(r.params.id == "offersearch"){

        // this.query = this.cokkie.get('query');
        if (r.params.query) {
          this.query = r.params.query
        }else{
          this.query = "";
        }
        console.log(this.query);
        this.offersearch = true;
        this.requestsearch = false;
        if (r.params.qid) {
          this.offerId = r.params.qid;
        }else{
          this.offerId = '0';
        }
        console.log(r.params.qid);
        this.pageId = r.params.pid;
        this.nextPage = +this.pageId+1;
        this.previousPage = +this.pageId-1;
        if (r.params.pid) {
          this.mS.getOfferSearch(this.offerId, this.pageId, this.countryId, this.typeId, this.query).subscribe((r:any)=>{
            window.scrollTo(0,0);
            console.log(r);
            this.offerResult = r.result;
            this.range = r.range;
            this.total = r.total;
            this.country = r.country;
            this.sectortype = r.type;
            let x = this.total/15;
            if (x%15 != 0) {
              x = x+1;
            }
            this.pagination = [];
            for (var i = 1; i < x; i++) {
              this.pagination.push(i);
              this.lastPage = i;
            }
            console.log("Last Page = "+this.lastPage);
          })
        }else{
          this.pageId = 1;
          this.nextPage = +this.pageId+1;
          this.previousPage = +this.pageId-1;
          this.mS.getOfferSearch(this.offerId, 0, 0, 0, this.query).subscribe((r:any)=>{
            window.scrollTo(0,0);
            console.log(r);
            this.offerResult = r.result;
            this.range = r.range;
            this.total = r.total;
            this.country = r.country;
            this.sectortype = r.type;
            let x = this.total/15;
            if (x%15 != 0) {
              x = x+1;
            }
            this.pagination = [];
            for (var i = 1; i <= x; i++) {
              this.pagination.push(i);
              this.lastPage = i;
            }
            console.log("Last Page = "+this.lastPage);
          })
        }
      }else if(r.params.id == "requestsearch"){
        this.requestsearch = true;
        this.offersearch = false;
        if (r.params.query) {
          this.query = r.params.query
        }else{
          this.query = "";
        }
        console.log(this.query);
        if (r.params.qid) {
          this.offerId = r.params.qid;
          this.requestId = r.params.qid;
        }else{
          this.offerId = '0';
          this.requestId = '0';
        }
        console.log(r.params.qid);
        this.pageId = r.params.pid;
        this.nextPage = +this.pageId+1;
        this.previousPage = +this.pageId-1;
        if (r.params.pid) {
          this.mS.getRequestSearch(this.offerId, this.countryId, this.pageId, this.typeId, this.query).subscribe((r:any)=>{
            window.scrollTo(0,0);
            console.log(r);
            this.requestResult = r.results;
            this.range = r.range;
            this.total = r.total;
            this.sectortype = r.type;
            let x = this.total/15;
            console.log(x);
            if (x%15 != 0) {
              x = x+1;
            }
            this.pagination = [];
            for (var i = 1; i <= x; i++) {
              this.pagination.push(i);
              this.lastPage = i;
            }
            console.log("Last Page = "+this.lastPage);
          })
        }else{
          this.pageId = 1;
          this.nextPage = +this.pageId+1;
          this.previousPage = +this.pageId-1;
          this.mS.getRequestSearch(this.offerId, 0, 1, 0, this.query).subscribe((r:any)=>{
            window.scrollTo(0,0);
            console.log(r);
            this.offerResult = r.result;
            this.range = r.range;
            this.total = r.total;
            this.country = r.country;
            this.sectortype = r.type;
            let x = this.total/15;
            if (x%15 != 0) {
              x = x+1;
            }
            this.pagination = [];
            for (var i = 1; i <= x; i++) {
              this.pagination.push(i);
              this.lastPage = i;
            }
            console.log("Last Page = "+this.lastPage);
          })
        }
      }
    })
  }

  printDate($date){
    let date = $date.slice(0,4)+"-"+$date.slice(4,6)+"-"+$date.slice(6,8);
    return date;
  }

  nodisplay = false;
  productcount = [1,2,3,4,5,6,7,8]; 



}
