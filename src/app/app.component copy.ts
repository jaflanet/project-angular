import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.entity';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { GenerateRandomIdService } from '../generate-random-id.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputFormComponent } from '../input-form/input-form.component';
import { OutputFormComponent } from '../output-form/output-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    InputFormComponent,
    OutputFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title: String = 'project-1';
  dataUser!: DataUser;
  lableButton1: String = 'label1';
  lableButton2: String = 'label2';
  backgroundColor: String = '';
  randomId;
  name: String = '';
  addUserForm!: FormGroup;

  get nameForm() {
    return this.addUserForm.get('name');
  }

  get phoneNumberForm() {
    return this.addUserForm.get('phoneNumber');
  }

  constructor(private randomIdService: GenerateRandomIdService) {
    this.randomId = this.randomIdService.generateId();

    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(13),
      ]),
    });
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMousLeave() {
    this.backgroundColor = 'green';
  }

  ngOnInit(): void {
    this.title = 'test angular';
    this.dataUser = {
      name: 'jona',
      age: 23,
      address: [
        {
          zipcode: 1,
          province: 'jakarta',
          city: 'jakarta barat',
          district: 'kembangan',
        },
        {
          zipcode: 2,
          province: 'jakarta',
          city: 'jakarta timur',
          district: 'cijantung',
        },
      ],
    };
  }

  eventFromParent(event: any) {
    this.lableButton1 = event;
    this.lableButton2 = event;
  }

  updateName(event: String) {
    this.name = event;
  }

  onSubmit() {
    console.log(this.addUserForm.value);
  }
}
