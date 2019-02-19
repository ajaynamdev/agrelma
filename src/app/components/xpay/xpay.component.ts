import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-xpay',
  templateUrl: './xpay.component.html',
  styleUrls: ['./xpay.component.css']
})
export class XpayComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router,) { }

  amount:number;

  ngOnInit() {
  	this.route.paramMap.subscribe((r:any)=>{
  		console.log(r.params.amount);
  		this.amount = r.params.amount;
  	})
  }

}
