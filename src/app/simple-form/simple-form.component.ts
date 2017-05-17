import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    {{message}}
    <input #myInput type="text">
    <button (click)="onClick($event, myInput.value)">Klicka Mig</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  onClick(event, value) {
    console.log(event, `Jag hittade det med ${value} som value`)
  }

  constructor() { }

  ngOnInit() {
  }

}
