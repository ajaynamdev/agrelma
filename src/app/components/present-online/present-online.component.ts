import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-present-online',
  templateUrl: './present-online.component.html',
  styleUrls: ['./present-online.component.css']
})
export class PresentOnlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  socialContact = [1];
  sectors = [
		{
			"id": "1",
			"name": "WINES AND LIQUORS",
			"sub": ["Quality Wine", "Table Wine", "Liquors"]
		},
		{
			"id": "2",
			"name": "OIL AND OLIVES",
			"sub": ["Oil", "Olives", "Oil Seeds"]
		},
		{
			"id": "16",
			"name": "FISH AND SEAFOOD",
			"sub": ["Fish and Seafood", "Crostacea and Mollusca", "Packed Fisheries"]
		},
		{
			"id": "3",
			"name": "MEAT AND CURED PORK",
			"sub": ["Cured Pork", "Meat"]
		},
		{
			"id": "4",
			"name": "FRUITS AND VEGE.",
			"sub": ["Fruits","Citrus","Vegetables","Packed Fruit and Vegetables"]
		},
		{
			"id": "3",
			"name": "PASTA",
			"sub": []
		},
		{
			"id": "4",
			"name": "DELICATESSEN",
			"sub": []
		},
		{
			"id": "7",
			"name": "PRESERVES",
			"sub": []
		},
		{
			"id": "8",
			"name": "SWEETS AND DOUGH PRODUCTS",
			"sub": []
		},
		{
			"id": "9",
			"name": "CHEESE",
			"sub": []
		},
		{
			"id": "10",
			"name": "COFFEE",
			"sub": []
		},
		{
			"id": "11",
			"name": "DRINKS",
			"sub": []
		},
		{
			"id": "12",
			"name": "FROZEN PRODUCTS",
			"sub": []
		},
		{
			"id": "13",
			"name": "CEREALS",
			"sub": []
		},
		{
			"id": "14",
			"name": "CONVENIENCE FOOD/READY MEALS",
			"sub": []
		},
		{
			"id": "15",
			"name": "VINEGAR",
			"sub": []
		}
  ];
  selectedTab = 0;

  addMore(){
  	this.socialContact.push((this.socialContact.length));
  }

  remove(i){
  	this.socialContact.splice(i, 1);
  }

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
