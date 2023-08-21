import { Component, Input, OnInit } from '@angular/core';
import { EmailsBodyType } from 'src/app/services/dropmail.type';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

 @Input() listEmails:EmailsBodyType[]=[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
