import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from '../../services/main.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['../producer.style.css','./add-files.component.css']
})
export class AddFilesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router,
  public mS:MainService,
  public snackBar: MatSnackBar) { }


  OfferId:any;
  offerdetail:any;
  files:any;

  toggele:boolean = true;

  ngOnInit() {
  	this.route.paramMap.subscribe((r:any)=>{
      console.log(r.params.id);
      this.OfferId = r.params.id;
      this.mS.getFileDetails(this.OfferId).subscribe((r:any)=>{
        // console.log(r);
        this.offerdetail = r.offerdetail[0];
        this.files = r.filedetail;
        console.log(this.files);
      })
  	})
  }

  upload(thefile, fileType){
    console.log(thefile);
    this.mS.uplaodFile(this.OfferId, fileType, thefile).subscribe((r:any)=>{
      console.log(r);
      if (r.status == '1') {
        this.fetchFiles();
        this.toggele = this.toggele?false:true;
      }else{
        this.snackBar.open(r.message, 'X');
      }
    })
  }

  fetchFiles(){
    this.mS.getFileDetails(this.OfferId).subscribe((r:any)=>{
        // console.log(r);
        this.offerdetail = r.offerdetail[0];
        this.files = r.filedetail;
        console.log(this.files);
      })
  }

  finish(){
    this.router.navigate(['/admin/producer/offer-request/']);
  }

}
