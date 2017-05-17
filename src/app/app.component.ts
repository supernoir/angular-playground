import { Component } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>
    <app-simple-form>
    </app-simple-form>
    {{mail.message}}
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Välkomma till Angular 2!';

  constructor(private mail: MailService) {

  }
}
