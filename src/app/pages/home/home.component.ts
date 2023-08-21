import { Component, EventEmitter, OnInit } from '@angular/core';
import { DropmailService } from 'src/app/services/dropmail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  emails:any = [];

  constructor(private dropmailService:DropmailService) { }

  ngOnInit() {
  }

  getEmail() {
    this.dropmailService.getEmail().subscribe((result)=> {
      this.emails = result.data.session.mails;
    });
  }

  handleRefresh(event:any) {
    this.getEmail();
  }

}
