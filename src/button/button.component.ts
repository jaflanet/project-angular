import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataUser } from '../app/app.entity';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonLabel: String = '';
  @Input() dataForChild!: DataUser;

  @Output() submitButton = new EventEmitter<String>();

  onClick() {
    this.submitButton.emit('button label');
  }
}
