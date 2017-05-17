import { Component } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>
    <app-simple-form
      *ngFor="let message of mail.messages"
      [message]="message.text"
      (update)="onUpdate(message.id, $event.text)"
      >
    </app-simple-form>
    <ul>
      <li *ngFor="let message of mail.messages">
      {{message.text}}</li>
    </ul>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Välkomma till Angular 2!';

  onUpdate(id, text) {
    this.mail.update(id, text);
  }

  constructor(private mail: MailService) {

  }
}
