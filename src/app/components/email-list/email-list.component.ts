import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  listEmail =[
    {
      "toAddrOrig": "example@10mail.org",
      "toAddr": "example@10mail.org",
      "text": "Os ícones do sistema do Material Design são simples, modernos, amigáveis e, às vezes, excêntricos. Cada ícone é criado usando nossas diretrizes de design para representar de maneira simples e mínima os conceitos universais usados em uma IU. Esses ícones foram otimizados para oferecer uma bela exibição em todas as plataformas",
      "receivedAt": "2021-02-18T01:30:17+00:00",
      "rawSize": 812,
      "raw": "MIME-Version: 1.0\r\nMessage-ID: <test@mail.example.com>\r\nSubject: Hello\r\nFrom: Hello <test@example.com>\r\nTo: aonfmqcpw@example.com\r\nContent-Type: text/plain; charset=US-ASCII\r\n\r\nHello\r\n",
      "id": "TWFpbDqcMxamadJC/aLiPz/XL0lKOnZiMThjbzZ0bjZiNHB2MTBoZ3I3bGhhbGpjbnJodms1",
      "html": null,
      "headerSubject": "Hello",
      "headerFrom": "Hello <test@example.com>",
      "fromAddr": "test@example.com",
      "downloadUrl": "https://dropmail.me/download/mail/gql:1:9c3316a6-69d2-42fd-a2e2-3f3fd72f494a/vb18co6tn6b4pv10hgr7lhaljcnrhvk5",
      "decodeStatus": "OK"
    },
    {
      "toAddrOrig": "example@10mail.org",
      "toAddr": "example@10mail.org",
      "text": "Os ícones do sistema do Material Design são simples, modernos, amigáveis e, às vezes, excêntricos. Cada ícone é criado usando nossas diretrizes de design para representar de maneira simples e mínima os conceitos universais usados em uma IU. Esses ícones foram otimizados para oferecer uma bela exibição em todas as plataformas",
      "receivedAt": "2021-02-18T01:30:17+00:00",
      "rawSize": 812,
      "raw": "MIME-Version: 1.0\r\nMessage-ID: <test@mail.example.com>\r\nSubject: Hello\r\nFrom: Hello <test@example.com>\r\nTo: aonfmqcpw@example.com\r\nContent-Type: text/plain; charset=US-ASCII\r\n\r\nHello\r\n",
      "id": "TWFpbDqcMxamadJC/aLiPz/XL0lKOnZiMThjbzZ0bjZiNHB2MTBoZ3I3bGhhbGpjbnJodms1",
      "html": null,
      "headerSubject": "Hello",
      "headerFrom": "Hello <test@example.com>",
      "fromAddr": "test@example.com",
      "downloadUrl": "https://dropmail.me/download/mail/gql:1:9c3316a6-69d2-42fd-a2e2-3f3fd72f494a/vb18co6tn6b4pv10hgr7lhaljcnrhvk5",
      "decodeStatus": "OK"
    },
    {
      "toAddrOrig": "example@10mail.org",
      "toAddr": "example@10mail.org",
      "text": "Os ícones do sistema do Material Design são simples, modernos, amigáveis e, às vezes, excêntricos. Cada ícone é criado usando nossas diretrizes de design para representar de maneira simples e mínima os conceitos universais usados em uma IU. Esses ícones foram otimizados para oferecer uma bela exibição em todas as plataformas",
      "receivedAt": "2021-02-18T01:30:17+00:00",
      "rawSize": 812,
      "raw": "MIME-Version: 1.0\r\nMessage-ID: <test@mail.example.com>\r\nSubject: Hello\r\nFrom: Hello <test@example.com>\r\nTo: aonfmqcpw@example.com\r\nContent-Type: text/plain; charset=US-ASCII\r\n\r\nHello\r\n",
      "id": "TWFpbDqcMxamadJC/aLiPz/XL0lKOnZiMThjbzZ0bjZiNHB2MTBoZ3I3bGhhbGpjbnJodms1",
      "html": null,
      "headerSubject": "Hello",
      "headerFrom": "Hello <test@example.com>",
      "fromAddr": "test@example.com",
      "downloadUrl": "https://dropmail.me/download/mail/gql:1:9c3316a6-69d2-42fd-a2e2-3f3fd72f494a/vb18co6tn6b4pv10hgr7lhaljcnrhvk5",
      "decodeStatus": "OK"
    },
    {
      "toAddrOrig": "example@10mail.org",
      "toAddr": "example@10mail.org",
      "text": "Os ícones do sistema do Material Design são simples, modernos, amigáveis e, às vezes, excêntricos. Cada ícone é criado usando nossas diretrizes de design para representar de maneira simples e mínima os conceitos universais usados em uma IU. Esses ícones foram otimizados para oferecer uma bela exibição em todas as plataformas",
      "receivedAt": "2021-02-18T01:30:17+00:00",
      "rawSize": 812,
      "raw": "MIME-Version: 1.0\r\nMessage-ID: <test@mail.example.com>\r\nSubject: Hello\r\nFrom: Hello <test@example.com>\r\nTo: aonfmqcpw@example.com\r\nContent-Type: text/plain; charset=US-ASCII\r\n\r\nHello\r\n",
      "id": "TWFpbDqcMxamadJC/aLiPz/XL0lKOnZiMThjbzZ0bjZiNHB2MTBoZ3I3bGhhbGpjbnJodms1",
      "html": null,
      "headerSubject": "Hello",
      "headerFrom": "Hello <test@example.com>",
      "fromAddr": "test@example.com",
      "downloadUrl": "https://dropmail.me/download/mail/gql:1:9c3316a6-69d2-42fd-a2e2-3f3fd72f494a/vb18co6tn6b4pv10hgr7lhaljcnrhvk5",
      "decodeStatus": "OK"
    },
    {
      "toAddrOrig": "example@10mail.org",
      "toAddr": "example@10mail.org",
      "text": "Os ícones do sistema do Material Design são simples, modernos, amigáveis e, às vezes, excêntricos. Cada ícone é criado usando nossas diretrizes de design para representar de maneira simples e mínima os conceitos universais usados em uma IU. Esses ícones foram otimizados para oferecer uma bela exibição em todas as plataformas",
      "receivedAt": "2021-02-18T01:30:17+00:00",
      "rawSize": 812,
      "raw": "MIME-Version: 1.0\r\nMessage-ID: <test@mail.example.com>\r\nSubject: Hello\r\nFrom: Hello <test@example.com>\r\nTo: aonfmqcpw@example.com\r\nContent-Type: text/plain; charset=US-ASCII\r\n\r\nHello\r\n",
      "id": "TWFpbDqcMxamadJC/aLiPz/XL0lKOnZiMThjbzZ0bjZiNHB2MTBoZ3I3bGhhbGpjbnJodms1",
      "html": null,
      "headerSubject": "Hello",
      "headerFrom": "Hello <test@example.com>",
      "fromAddr": "test@example.com",
      "downloadUrl": "https://dropmail.me/download/mail/gql:1:9c3316a6-69d2-42fd-a2e2-3f3fd72f494a/vb18co6tn6b4pv10hgr7lhaljcnrhvk5",
      "decodeStatus": "OK"
    },
    {
      "toAddrOrig": "example@10mail.org",
      "toAddr": "example@10mail.org",
      "text": "Os ícones do sistema do Material Design são simples, modernos, amigáveis e, às vezes, excêntricos. Cada ícone é criado usando nossas diretrizes de design para representar de maneira simples e mínima os conceitos universais usados em uma IU. Esses ícones foram otimizados para oferecer uma bela exibição em todas as plataformas",
      "receivedAt": "2021-02-18T01:30:17+00:00",
      "rawSize": 812,
      "raw": "MIME-Version: 1.0\r\nMessage-ID: <test@mail.example.com>\r\nSubject: Hello\r\nFrom: Hello <test@example.com>\r\nTo: aonfmqcpw@example.com\r\nContent-Type: text/plain; charset=US-ASCII\r\n\r\nHello\r\n",
      "id": "TWFpbDqcMxamadJC/aLiPz/XL0lKOnZiMThjbzZ0bjZiNHB2MTBoZ3I3bGhhbGpjbnJodms1",
      "html": null,
      "headerSubject": "Hello",
      "headerFrom": "Hello <test@example.com>",
      "fromAddr": "test@example.com",
      "downloadUrl": "https://dropmail.me/download/mail/gql:1:9c3316a6-69d2-42fd-a2e2-3f3fd72f494a/vb18co6tn6b4pv10hgr7lhaljcnrhvk5",
      "decodeStatus": "OK"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
