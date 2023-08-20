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
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';

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
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ClipboardModule,
    FormsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
