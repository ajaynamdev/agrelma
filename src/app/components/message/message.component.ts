import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router,) { }

  theMessage = "This is the message";

  ngOnInit() {
  	window.scrollTo(0, 0);
  	this.route.paramMap.subscribe((r:any)=>{
      console.log(r.params.id);
      if (r.params.id==1) {
      	this.theMessage = "Thank You For Contacting Us We Would get back to you soon";
      }else if(r.params.id == 2){
      	this.theMessage = "Thanks for the subscription request please transfer money we would be in touch with you very soon";
      }else if(r.params.id == 3){
      	this.theMessage = "We Have Registered Your Request We Would get back to you soon";
      }
    })
  }

}
