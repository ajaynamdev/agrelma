import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MainService } from '../../services/main.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['../producer.style.css','./message-list.component.css']
})



export class MessageListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  msgrCols:string[] = ["subject", "sender", "date", "actions"];
  msgsCols:string[] = ["subject", "recipient", "date", "actions"];

  msgrSource:any;
  msgsSource:any;

  constructor(private mS:MainService, public dialog: MatDialog) { }

  ngOnInit() {
    this.mS.msgR().subscribe((r:any)=>{
      console.log(r);
      let x = [];
      for (var i of r) {
        let date = i.datamsg.slice(0,4)+"-"+i.datamsg.slice(4,6)+"-"+i.datamsg.slice(6,8);
        let time = i.oramsg.slice(0,2)+":"+i.oramsg.slice(2,4);
        let sender = i.mittente;
        let subject = i.oggetto;
        let actions = "X";
        let message = i.messaggio;
        let topush = {subject: subject, sender: sender, date: date, time: time, actions: actions, message: message}
        x.push(topush);
      }
      this.msgrSource = x;
    })
    this.mS.msgS().subscribe((r:any)=>{
      console.log(r);
      let x = [];
      for (var i of r) {
        let date = i.datamsg.slice(0,4)+"-"+i.datamsg.slice(4,6)+"-"+i.datamsg.slice(6,8);
        let time = i.oramsg.slice(0,2)+":"+i.oramsg.slice(2,4);
        let subject = i.oggetto;
        let recipient = i.destinatario;
        let actions = "X";
        let message = i.messaggio;
        let topush = {subject: subject, recipient: recipient, date: date, time: time, actions: actions, message: message}
        x.push(topush);
      }
      this.msgsSource = x;
    })
  }

  openMessageR(message): void {
    console.log(message);
    let dialogRef = this.dialog.open(MessageDialog, {
      width: '500px',
      data: { name: "Vishal Pandey", message: message }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}



@Component({
  selector: 'message-dialog',
  templateUrl: 'message-dialog.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageDialog {

  message:any;

  constructor(
    public dialogRef: MatDialogRef<MessageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mS:MainService,
    ) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
 

}