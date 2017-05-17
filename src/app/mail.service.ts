import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    `Du har en ny meddelande`,
    `Nu har du en ny meddelande`,
    `En ny meddelande för dig`
  ];

  constructor() { }

}
