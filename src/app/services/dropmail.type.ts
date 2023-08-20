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

