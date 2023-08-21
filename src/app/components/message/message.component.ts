import { Component, Input, OnInit } from '@angular/core';
import { EmailsBodyType } from 'src/app/services/dropmail.type';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: EmailsBodyType | undefined;

  constructor() { }

  ngOnInit() {
  }

}
