import { MessageComponent } from './components/message/message.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './pages/home/home.component';
import { GenerateEmailComponent } from './components/generate-email/generate-email.component';
import { EmailListComponent } from './components/email-list/email-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenerateEmailComponent,
    MessageComponent,
    EmailListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
