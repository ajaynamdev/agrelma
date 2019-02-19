import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import {MainService as Pmain} from '../../producer/services/main.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../admin/services/auth.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  constructor(public mS:MainService,
  	public pmS:Pmain,
  	private route: ActivatedRoute,
  	private router: Router,
  	public aS:AuthService) { }

  request:any;
  company:any;
  iddomoff:any;

  isOffer:boolean = false;
  isQuo:boolean = false;
  subject = "";

  ngOnInit() {
  	this.route.paramMap.subscribe((r:any)=>{
  		console.log(r.params.domoffid);
  		let iddomoff = r.params.domoffid
      let code = r.params.ro
      let quo = r.params.quo

      if (code == '1') {
        this.isOffer = true;
      }

      if (quo == '1'){
        this.isQuo = true;
        this.subject = "Latest Price Request";
      }


  		this.iddomoff = iddomoff;
  		this.mS.getRequestDetail(iddomoff).subscribe((r:any)=>{
  			console.log(r);
  			this.request = r[0];
  		})
  		this.pmS.getCompany().subscribe((r:any)=>{
  			console.log(r);
  			this.company = r[0];
  		})
  	})

  }

  message(object, message, quantity){
  	let previousmsg = '0';
  	if (object == "" || message == "" || quantity == "") {
  		alert("all fields are mandatory");
  		return
  	}
  	this.mS.message(this.iddomoff, previousmsg, object, message, quantity).subscribe((r:any)=>{
  		console.log(r);
      if (r) {
        alert("Message is sent you would recieve a reply soon");
        this.router.navigate(["/"]);
      }
  	}, (err:any)=>{
      alert("Thanks For Contacting \n Reciepient Email id is wrong or not provided. We will contact you instead and connect")
      this.router.navigate(["/"]);
    })
  }

}
