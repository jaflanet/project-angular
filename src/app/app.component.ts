import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.entity';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { GenerateRandomIdService } from '../services/generate-random-id/generate-random-id.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ReversePipe } from '../pipe/reversePipe/reverse.pipe';
import { UserdataService } from '../services/userdata/userdata.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    ReversePipe,
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
  isShown: Boolean = true;
  today = new Date();

  get nameForm() {
    return this.addUserForm.get('name');
  }

  get phoneNumberForm() {
    return this.addUserForm.get('phoneNumber');
  }

  constructor(
    private randomIdService: GenerateRandomIdService,
    private userDataService: UserdataService
  ) {
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
    const userData = this.userDataService.getUsers();
    this.dataUser = userData;
  }

  eventFromParent(event: any) {
    this.lableButton1 = event;
    this.lableButton2 = event;
  }

  updateName(event: String) {
    this.name = event;
  }

  onSubmit() {
    this.isShown = !this.isShown;
  }
}
