import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
declare var $:any;

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router,) { }

  offer:boolean = false;
  request:boolean = false;

  ngOnInit() {
  	$.getScript("../../../assets/js/scripts.js", function() {
		});
    this.route.paramMap.subscribe((r:any)=>{
      console.log(r.params.id);
      if (r.params.id == "offer") {
        this.offer = true;
      }else if(r.params.id == "request"){
        this.request = true;
      }
    })
  }

  nodisplay = false;
  productcount = [1,2,3,4,5,6,7,8]; 

}
