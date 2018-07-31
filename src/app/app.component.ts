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

     if(this.router.url === "/offer"){
       return "single-product full-width normal";
     }
   }
  title = 'app';
}
