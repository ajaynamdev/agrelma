import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import {MatSnackBar} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private mS:MainService,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
  }

  nodisplay:boolean = false;
  bmessage = "Send Message"

  contactUs(company_name, contact, address, city, country, phone, fax, website, email, message) {
    if (company_name == "") {
      this.snackBar.open("Please Enter Company Name", "X", {duration: 2000});
    }else if(contact == ""){
      this.snackBar.open("Please Enter Contact", "X", {duration: 2000});
    }else if(email == ""){
      this.snackBar.open("Please Enter Email", "X", {duration: 2000});
    }else if(phone == ""){
      this.snackBar.open("Please Enter Phone Number", "X", {duration: 2000});
    }else if(message == ""){
      this.snackBar.open("Please Enter Your message", "X", {duration: 2000});
    }else{
      this.bmessage = "Sending ...";
      this.mS.contactUs(company_name, contact, address, city, country, phone, fax, website, email, message).subscribe((r:any)=>{
        console.log(r);
        if (r == "Createed") {
          this.router.navigate(["/message/1"]);
          // alert("Thank You For Contacting Us We Would get back to you soon");
          // window.location.reload();
        }
      })
    }
  }

}
