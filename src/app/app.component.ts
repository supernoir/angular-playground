import { Component } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>
    <app-simple-form
      *ngFor="let message of mail.messages"
      [message]="message">
    </app-simple-form>
    <ul>
      <li *ngFor="let message of mail.messages">
      {{message}}</li>
    </ul>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Välkomma till Angular 2!';

  constructor(private mail: MailService) {

  }
}
