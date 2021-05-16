import {IMailProvider, Imessage} from '../IMailProvider';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export class MailtrapProvider implements IMailProvider{
  private transporter: Mail;

  constructor(){
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ca688aef8bf22a",
        pass: "701333e5db0479"
      }
    })
  }

  async sendMail(message: Imessage): Promise<void>{
    this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}