import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private router:Router){
	}


	getRoute(){
     if (this.router.url === '/contact-us' || this.router.url === '/about-us' || this.router.url === '/partners' || this.router.url === '/login'){
     	return "page-template-default";
     }

     let fullUrl = this.router.url.split("/");

     if(this.router.url === "/offer" || fullUrl[1] == "offer"){
       return "single-product full-width normal";
     }


   }
  title = 'app';
}
