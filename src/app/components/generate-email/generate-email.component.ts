import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropmailService } from 'src/app/services/dropmail.service';
import { Addresses } from 'src/app/services/dropmail.type';

@Component({
  selector: 'app-generate-email',
  templateUrl: './generate-email.component.html',
  styleUrls: ['./generate-email.component.scss']
})
export class GenerateEmailComponent implements OnInit {
  randomEmail:Addresses={id:'', address:''};

  constructor(private dropmailService:DropmailService) { }

  ngOnInit() {
  }

  getRandomUmail() {
    this.dropmailService.randomEmail().subscribe((result)=>{
      const {data:{introduceSession}} = result;
      this.randomEmail= introduceSession.addresses[0]
      this.randomEmail.address
  });

  }

}
