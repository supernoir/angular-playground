import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    { id: 0, text: `Du har en ny meddelande` },
    { id: 1, text: `Nu har du en ny meddelande` },
    { id: 2, text: `En ny meddelande för dig` }
  ];

  update(id, text) {
    this.messages = this.messages.map((m) =>
      m.id === id
        ? { id, text }
        : m
    )
  }

  constructor() { }

}
