import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories = ["Cereals","Cheese","Citrus","Coffee","Convenience food/ready meals","Crostacea and Mollusca","Cured Pork","Delicatessen","Drinks","Fish and Seafood","Frozen products","Fruits","Liquors","Meat","Oil","Oil Seeds","Olives","Packed Fisheries","Packed Fruit and Vegetables","Pasta","Preserves","Quality Wine","Sweets and dough products","Table Wine","Vegetables","Vinegar"];
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
}
