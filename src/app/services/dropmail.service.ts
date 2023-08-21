import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DropEmailType, ListEmailsType } from './dropmail.type';
import { tap } from 'rxjs/operators';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropmailService {
  private idEmail = '';

  header =  { headers: {
    "Content-Type": 'application/x-www-form-urlencoded'
  }};

  constructor(private httpClient: HttpClient) {}

  randomEmail() {
    const body = 'query=mutation {introduceSession {id, expiresAt, addresses{id, address}}}';
    return this.httpClient.post<DropEmailType>(`${environment.dropMailUrl}/graphql/MY_TOKEN`, body, this.header)
    .pipe(tap((value) => {
      this.idEmail = value.data.introduceSession.id;
    }),
     take(1)
    );
  }

  getEmail() {
     const query = `
      query ($id: ID!) {session(id:$id) {id, expiresAt, mails{id, rawSize, raw, fromAddr, toAddr, receivedAt, downloadUrl, toAddrOrig, decodeStatus, text, headerFrom, headerSubject, html}, addresses{id, address, restoreKey} }}
    `;

    const variables = {
      id: this.idEmail,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const body = JSON.stringify({
      query,
      variables,
    });
    return this.httpClient.post<ListEmailsType>(`${environment.dropMailUrl}/graphql/MY_TOKEN`, body, httpOptions)
  }
}
