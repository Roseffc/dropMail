export type Addresses={
  id: string;
  address: string;
}

export type IntroduceSessionType={
  id: string;
  expiresAt: string;
  addresses: Addresses[];
}
export type DataType={
  introduceSession: IntroduceSessionType
}

export type DropEmailType = {
  data: DataType;
}

// Model List emails

export type EmailsBodyType = {
  toAddrOrig:string;
  toAddr:string;
  text:string;
  receivedAt:string;
  rawSize:string;
  raw:string;
  id:string;
  html:string;
  headerSubject:string;
  headerFrom:string;
  fromAddr:string;
  downloadUrl:string;
  decodeStatus:string;
}

export type Addresses2 = {
  restoreKey: string;
  id: string;
  address: string;
}

export type EmailsType = {
  mails:EmailsBodyType[];
  id: string;
  expiresAt: string;
  addresses:Addresses2
}

export type SessionEmailsType = {
  session: EmailsType
}

export type ListEmailsType = {
  data: SessionEmailsType
}








