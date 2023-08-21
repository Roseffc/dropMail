import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropmailService } from 'src/app/services/dropmail.service';
import { Addresses } from 'src/app/services/dropmail.type';

@Component({
  selector: 'app-generate-email',
  templateUrl: './generate-email.component.html',
  styleUrls: ['./generate-email.component.scss']
})
export class GenerateEmailComponent implements OnInit {
  randomEmail:Addresses={id:'', address:''};
  @Output() statusEmail = new EventEmitter();
  @Output() refresh$= new EventEmitter();
  @Input() counterTime = 0;

  constructor(private dropmailService:DropmailService) { }

  ngOnInit() {
  }

  getRandomUmail() {
    this.dropmailService.randomEmail().subscribe((result)=>{
      const {data:{introduceSession}} = result;
      this.randomEmail= introduceSession.addresses[0]
      this.statusEmail.emit(this.randomEmail);
    });
  }

  handleRefresh() {
    this.refresh$.emit(true);
  }

}
