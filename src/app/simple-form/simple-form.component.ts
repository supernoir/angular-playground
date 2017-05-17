import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    {{message}}
    <input #myInput type="text" [(ngModel)]="message">
    <button (click)="onClick($event, myInput.value)">Klicka Mig</button>
    <button (click)="update.emit({text:message})">Klicka Mig</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  onClick(event, value) {
    console.log(event, `Jag hittade det med ${value} som value`)
  }

  constructor() {

    // setInterval(() => this.message = Math.random().toString(), 1000);

  }

  ngOnInit() {
  }

}
