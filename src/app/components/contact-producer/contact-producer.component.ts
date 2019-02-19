import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-contact-producer',
  templateUrl: './contact-producer.component.html',
  styleUrls: ['./contact-producer.component.css']
})
export class ContactProducerComponent implements OnInit {

  constructor(public mS:MainService) { }

  ngOnInit() {
  }

}
