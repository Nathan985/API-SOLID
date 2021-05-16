interface Iaddres{
  email: string;
  name: string;
}

export interface Imessage {
  to: Iaddres;
  from: Iaddres;
  subject: string;
  body: string;
}

export interface IMailProvider{
  sendMail(message: Imessage): Promise<void>;
}