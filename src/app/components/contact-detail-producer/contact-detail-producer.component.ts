import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-contact-detail-producer',
  templateUrl: './contact-detail-producer.component.html',
  styleUrls: ['./contact-detail-producer.component.css']
})
export class ContactDetailProducerComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router,
  private mS:MainService) { }

  company:any;
  sectors

  ngOnInit() {
  	this.route.paramMap.subscribe((r:any)=>{
  		console.log(r.params.id);
  		this.mS.getProducerCompany(r.params.id).subscribe((r:any)=>{
  			this.company = r.company[0];
  			this.sectors = r.sectors;
  			console.log(r);
  		})
    })
  }

  close(){
  	window.close();
  }

}
