import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate-email',
  templateUrl: './generate-email.component.html',
  styleUrls: ['./generate-email.component.scss']
})
export class GenerateEmailComponent implements OnInit {
  randomEmail='rododod@ig.com'

  constructor() { }

  ngOnInit() {
  }

}
