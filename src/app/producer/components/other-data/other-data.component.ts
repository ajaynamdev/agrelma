import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-data',
  templateUrl: './other-data.component.html',
  styleUrls: ['../producer.style.css','./other-data.component.css']
})
export class OtherDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  accessEdit:boolean = false;
  navigationEdit:boolean = false;
}
