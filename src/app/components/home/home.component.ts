import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NguCarousel } from '@ngu/carousel';
import { MainService } from '../../services/main.service';
declare var $:any;
declare function vishal():any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	showcase:any;
	latestoffers:any;
	latestrequests:any;
	latestrequests1:any;
	latestrequests2:any;

	firstSlider:boolean = true;
	loaded:boolean = false;
	theflase:boolean = false;

  constructor(public dialog: MatDialog,
  	private mS:MainService) { 
  	
  }

  ngOnInit() {


  	$.getScript("../../../assets/js/scripts.js", function() {
		});

		this.mS.showcase().subscribe((r:any)=>{
			this.showcase = r;
			console.log(r);
		})

		this.mS.latestoffer().subscribe((r:any)=>{
			this.latestoffers = r;
			console.log(r);
			this.firstSlider = false;
			this.loaded = true;
			vishal();
		}, ()=>{
			vishal();
			$.getScript("../../../assets/js/scripts.js", function() {
			});
		})

		this.mS.latestrequests().subscribe((r:any)=>{
			this.latestrequests = r;
			for (var i = 0; i < r.length; i++) {
				r[i].datains = r[i].datains.slice(0,4)+"-"+r[i].datains.slice(4,6)+"-"+r[i].datains.slice(6,8);
			}
			this.latestrequests1 = [];
			this.latestrequests2 = [];
			for (var i = 0; i < r.length/2; i++){
				this.latestrequests1.push(r[i]);
			}
			for (var i = r.length/2+1; i < r.length; i++){
				this.latestrequests2.push(r[i]);
			}



			console.log("Latest Requests");
			console.log(r);
		})
		
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
    $(".slick-arrow").click(function(){
    	alert("Hello");
    	console.log("fkdlslll");
    })
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
  ];

  sectors = [
		{
			"id": "1",
			"name": "Wines And Liquors",
			"sub": ["Quality Wine", "Table Wine", "Liquors"]
		},
		{
			"id": "2",
			"name": "Oil And Olives",
			"sub": ["Oil", "Olives", "Oil Seeds"]
		},
		{
			"id": "16",
			"name": "Fish And Seafood",
			"sub": ["Fish And Seafood", "Crostacea And Mollusca", "Packed Fisheries"]
		},
		{
			"id": "3",
			"name": "Meat And Cured Pork",
			"sub": ["Cured Pork", "Meat"]
		},
		{
			"id": "4",
			"name": "Fruits And Vege.",
			"sub": ["Fruits","Citrus","Vegetables","Packed Fruit And Vegetables"]
		},
		{
			"id": "3",
			"name": "Pasta",
			"sub": [],
			"sid": 27
		},
		{
			"id": "4",
			"name": "Delicatessen",
			"sub": [],
			"sid": 19
		},
		{
			"id": "7",
			"name": "Preserves",
			"sub": [],
			"sid": 26
		},
		{
			"id": "8",
			"name": "Sweets And Dough Products",
			"sub": [],
			"sid": 28
		},
		{
			"id": "9",
			"name": "Cheese",
			"sub": [],
			"sid": 6
		},
		{
			"id": "10",
			"name": "Coffee",
			"sub": [],
			"sid": 29
		},
		{
			"id": "11",
			"name": "Drinks",
			"sub": [],
			"sid": 11
		},
		{
			"id": "12",
			"name": "Frozen Products",
			"sub": [],
			"sid": 32
		},
		{
			"id": "13",
			"name": "Cereals",
			"sub": [],
			"sid": 3
		},
		{
			"id": "14",
			"name": "Convenience Food/Ready Meals",
			"sub": [],
			"sid": 30
		},
		{
			"id": "15",
			"name": "Vinegar",
			"sub": [],
			"sid": 31
		}
  ];



  nodisplay:boolean = false;

  openTry(): void {
    let dialogRef = this.dialog.open(TryNow, {
      width: 'auto',
      height: 'auto',
      data: { name: "Vishal Pandey", animal: "fkjdshk" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'try-now',
  templateUrl: 'try-now.html',
  styleUrls: ['./home.component.css']
})
export class TryNow {

  constructor(
    public dialogRef: MatDialogRef<TryNow>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}