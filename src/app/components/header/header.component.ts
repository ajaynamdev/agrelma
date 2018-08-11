import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router }      from '@angular/router';
import { AuthService } from '../../admin/services/auth.service';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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

  nodisplay = false;

  openLogin(): void {
    let dialogRef = this.dialog.open(LoginDialog, {
      width: '500px',
      data: { name: "Vishal Pandey", animal: "fkjdshk" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openSignup(): void {
    let dialogRef = this.dialog.open(SignupDialog, {
      width: '500px',
      data: { name: "Vishal Pandey", animal: "fkjdshk" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
  styleUrls: ['./header.component.css']
})
export class LoginDialog {

	message:any;

  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public authService: AuthService, 
    public router: Router, 
    private cookieService:CookieService
    ) {
  		this.message = "Login";
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  key:any;
  config: Config;

  login(id:any, pwd:any) {
    this.message = "Loggin in ... ";
    this.authService.getLogin(id,pwd).subscribe((data) => {
      this.config = { ...data }
      if (this.config.key == 'success') {
        this.message = "Logged In";
        this.cookieService.set("admin",this.config.value,360000,"/");
        // this.router.navigate(['/']);
        window.location.href = "/admin/producer";
      }else{
        this.message = this.config.key;
      }

    })
  }

}

@Component({
  selector: 'signup-dialog',
  templateUrl: 'signup-dialog.html',
  styleUrls: ['./header.component.css']
})
export class SignupDialog {

  constructor(
    public dialogRef: MatDialogRef<SignupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface Config {
  key: string;
  value: string;
}