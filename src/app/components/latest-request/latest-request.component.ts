import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-latest-request',
  templateUrl: './latest-request.component.html',
  styleUrls: ['./latest-request.component.css']
})
export class LatestRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.carouselOne = {
      grid: {xs: 1, sm: 2, md: 3, lg: 4, all: 0},
      slide: 1,
      speed: 400,
      interval: 1500,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

  public carouselOne: NguCarousel;


  requests = [
  	{
			"id": "",
			"sector":"Fish and Seafood",
			"rfor":"Quotations of frozen fish and seafood.",
			"country":"United Kingdom",
			"rdate":"18/07/2018",
		},
		{
			"id": "",
			"sector":"Liquors",
			"rfor":"Accepting new product tenders of spirits",
			"country":"United States",
			"rdate":"18/07/2018",
		},
		{
			"id": "",
			"sector":"Drinks",
			"rfor":"Accepting new product tenders of beers.",
			"country":"United States",
			"rdate":"18/07/2018",
		},
		{
			"id": "",
			"sector":"Fish and Seafood",
			"rfor":"Frozen seafood and shrimps.",
			"country":"United States",
			"rdate":"17/07/2018",
		},
		{
			"id": "",
			"sector":"Cereals",
			"rfor":"Semillas como la chia, amaranto y sacha ",
			"country":"Colombia",
			"rdate":"17/07/2018",
		},
		{
			"id": "",
			"sector":"Liquors",
			"rfor":"Spirits from all over the world.",
			"country":"Thailand",
			"rdate":"17/07/2018",
		},
		{
			"id": "",
			"sector":"Liquors",
			"rfor":"We want information of Whiskey.",
			"country":"Taiwan",
			"rdate":"17/07/2018",
		},
		{
			"id": "",
			"sector":"Drinks",
			"rfor":"Offers for juices / sparkling water.",
			"country":"Barbados",
			"rdate":"16/07/2018",
		},
		{
			"id": "",
			"sector":"Sweets and dough products",
			"rfor":"Offers for candies and chocolates.",
			"country":"Barbados",
			"rdate":"16/07/2018",
		},
		{
			"id": "",
			"sector":"Oil Seeds",
			"rfor":"Cooking oil.",
			"country":"Lithuania",
			"rdate":"16/07/2018",
		},
		{
			"id": "",
			"sector":"Fish and Seafood",
			"rfor":"We can see offers of frozen seafood.",
			"country":"Malaysia",
			"rdate":"13/07/2018",
		},
		{
			"id": "",
			"sector":"Meat",
			"rfor":"Beef and Lamb Meat of all cuts.",
			"country":"Trinidad and Tobago",
			"rdate":"12/07/2018",
		},
		{
			"id": "",
			"sector":"Liquors",
			"rfor":"Vodka, gin and whisky for canadian importer.",
			"country":"Canada",
			"rdate":"11/07/2018",
		},
		{
			"id": "",
			"sector":"Liquors",
			"rfor":"Spirits.",
			"country":"Malta",
			"rdate":"10/07/2018",
		},
		{
			"id": "",
			"sector":"Frozen products",
			"rfor":"Still interested in frozen processed foods.",
			"country":"Indonesia",
			"rdate":"10/07/2018",
		},
		{
			"id": "",
			"sector":"Sweets and dough products",
			"rfor":"Still interested in snacks.",
			"country":"Indonesia",
			"rdate":"10/07/2018",
		},
		{
			"id": "",
			"sector":"Liquors",
			"rfor":"Branded whiskey.",
			"country":"Netherlands",
			"rdate":"09/07/2018",
		},
		{
			"id": "",
			"sector":"Sweets and dough products",
			"rfor":"Actually, we can accept offers of sweeteners.",
			"country":"Malaysia",
			"rdate":"06/07/2018",
		},
		{
			"id": "",
			"sector":"Cereals",
			"rfor":"We can accept offers of starch, / flours and white powders.",
			"country":"Malaysia",
			"rdate":"06/07/2018",
		},
		{
			"id": "",
			"sector":"Drinks",
			"rfor":"Beers / Cider.",
			"country":"Hong Kong",
			"rdate":"29/06/2018",
		},
		{
			"id": "",
			"sector":"Vegetables",
			"rfor":"Send information of frozen vegetables.",
			"country":"Norway",
			"rdate":"28/06/2018",
		},
		{
			"id": "",
			"sector":"Fish and Seafood",
			"rfor":"Send information of frozen fish.",
			"country":"Norway",
			"rdate":"28/06/2018",
		},
		{
			"id": "",
			"sector":"Meat",
			"rfor":"Send information of frozen meat.",
			"country":"Norway",
			"rdate":"28/06/2018",
		},
		{
			"id": "",
			"sector":"Delicatessen",
			"rfor":"Catalogs of butter.",
			"country":"South Africa",
			"rdate":"26/06/2018",
		},
		{
			"id": "",
			"sector":"Meat",
			"rfor":"Frozen Meat: Poultry, Turkey, Beef and Pork.",
			"country":"South Africa",
			"rdate":"26/06/2018",
		},
		{
			"id": "",
			"sector":"Coffee",
			"rfor":"we want to check your tender coffee beans and instant coffee",
			"country":"Bulgaria",
			"rdate":"25/06/2018",
		},
		{
			"id": "",
			"sector":"Preserves",
			"rfor":"Send your tenders of beans, sauces and spices.",
			"country":"Bulgaria",
			"rdate":"25/06/2018",
		},
		{
			"id": "",
			"sector":"Drinks",
			"rfor":"We are open for new tenders of  flavored tea",
			"country":"Bulgaria",
			"rdate":"25/06/2018",
		},
		{
			"id": "",
			"sector":"Cereals",
			"rfor":"We are open for new tenders of  grains and rice",
			"country":"Bulgaria",
			"rdate":"25/06/2018",
		},
		{
			"id": "",
			"sector":"Packed Fruit and Vegetables",
			"rfor":"Almonds, nuts, hazelnuts, plums and raisins.",
			"country":"Brazil",
			"rdate":"21/06/2018",
		},
		{
			"id": "",
			"sector":"Oil Seeds",
			"rfor":"Interested in sunflower oil.",
			"country":"Brazil",
			"rdate":"21/06/2018",
		},
		{
			"id": "",
			"sector":"Drinks",
			"rfor":"beers, Craft or industrial.",
			"country":"Greece",
			"rdate":"21/06/2018",
		},
		{
			"id": "",
			"sector":"Packed Fruit and Vegetables",
			"rfor":"Ofertas de piña en trozos latas y bolsas de 3kg",
			"country":"Mexico",
			"rdate":"20/06/2018",
		}

  ]

}
