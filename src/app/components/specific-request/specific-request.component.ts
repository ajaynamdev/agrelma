import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-request',
  templateUrl: './specific-request.component.html',
  styleUrls: ['./specific-request.component.css']
})
export class SpecificRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedTab = 0;

  scroll(scrollDuration) {
	    var cosParameter = window.scrollY / 2,
	        scrollCount = 0,
	        oldTimestamp = performance.now();
	    function step (newTimestamp) {
	        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
	        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
	        if (window.scrollY === 0) return;
	        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
	        oldTimestamp = newTimestamp;
	        window.requestAnimationFrame(step);
	    }
	    window.requestAnimationFrame(step);
	}
  

}
