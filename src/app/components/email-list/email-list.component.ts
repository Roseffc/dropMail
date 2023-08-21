import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmailsBodyType } from 'src/app/services/dropmail.type';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

 @Input() listEmails:EmailsBodyType[]=[];
 @Output() viewEmail$= new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  handleViewEmail(email:EmailsBodyType) {
    this.viewEmail$.emit(email)
  }


}
