import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  styleUrls: ['./square.component.css'],
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button nbButton hero status="info" *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined;
}
