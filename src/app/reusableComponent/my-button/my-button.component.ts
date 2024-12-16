import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() obBtnClicked = new EventEmitter<any>();

  onClick() {
    this.obBtnClicked.emit('admin');
  }
}
