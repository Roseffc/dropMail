import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DropEmailType } from './dropmail.type';

@Injectable({
  providedIn: 'root',
})
export class DropmailService {
  private KEYTOKEN = 'dropMail';

  header =  { headers: {
    "Content-Type": 'application/x-www-form-urlencoded'
  }};

  constructor(private httpClient: HttpClient) {}

  randomEmail() {
    const body = 'query=mutation {introduceSession {id, expiresAt, addresses{id, address}}}';
    return this.httpClient.post<DropEmailType>(`${environment.dropMailUrl}/graphql/MY_TOKEN`, body, this.header);
  }
}
