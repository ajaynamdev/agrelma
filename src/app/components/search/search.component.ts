import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  sectors = ["Cereals","Cheese","Citrus","Coffee","Convenience food/ready meals","Crostacea and Mollusca","Cured Pork","Delicatessen","Drinks","Fish and Seafood","Frozen products","Fruits","Liquors","Meat","Oil","Oil Seeds","Olives","Packed Fisheries","Packed Fruit and Vegetables","Pasta","Preserves","Quality Wine","Sweets and dough products","Table Wine","Vegetables","Vinegar"];

}
