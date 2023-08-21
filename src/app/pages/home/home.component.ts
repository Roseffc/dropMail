import { Component, EventEmitter, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DropmailService } from 'src/app/services/dropmail.service';
import { EmailsBodyType } from 'src/app/services/dropmail.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  emails:EmailsBodyType[] = [];
  bodyEmail:EmailsBodyType | undefined;
  subscriptionTimer!: Subscription;
  counterTime = 0;

  constructor(private dropmailService:DropmailService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscriptionTimer.unsubscribe();
  }

  handleEmail() {
    this.refreshCounter();
  }

  handleRefresh(event:any) {
    this.getEmail();
  }

  viewBodyMessage(body:EmailsBodyType ) {
    this.bodyEmail = body;
  }

  refreshCounter(){
    this.subscriptionTimer = interval(1000).subscribe(() => {
      this.counterTime++;
      console.log(this.counterTime)
      if (this.counterTime === 5) {
        this.counterTime = 0;
        this.getEmail();
      }
    });
  }

  getEmail(){
    this.dropmailService.getEmail().subscribe((result)=> {
      this.emails = result.data.session.mails;
    });
  }




}
