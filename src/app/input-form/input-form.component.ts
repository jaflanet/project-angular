import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataUser } from '../app.entity';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss',
})
export class InputFormComponent {
  addUserForm!: FormGroup;
  @Output() userDataSubmit = new EventEmitter<DataUser>();

  constructor() {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        zipcode: new FormControl('', Validators.required),
        province: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
      }),
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      const formData: DataUser = this.addUserForm.value;
      this.userDataSubmit.emit(formData);
    } else {
    }
  }
}
