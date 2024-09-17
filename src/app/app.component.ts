import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DataUser } from './app.entity';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputFormComponent } from '../input-form/input-form.component';
import { OutputTableComponent } from '../output-table/output-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputFormComponent,
    OutputTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title: string = 'challenge-day-1';
  dataUser: DataUser[] = [];
  addUserForm!: FormGroup;

  ngOnInit(): void {
    this.dataUser = [
      {
        name: 'jona',
        email: 'jona321@gmail.com',
        address: {
          zipcode: 1,
          province: 'jakarta',
          city: 'jakarta barat',
        },
      },
      {
        name: 'jona2',
        email: 'jona123@gmail.com',
        address: {
          zipcode: 2,
          province: 'jakarta',
          city: 'jakarta timur',
        },
      },
    ];
  }

  addUser(userData: DataUser) {
    console.log('before', userData);
    this.dataUser.push(userData);
    console.log('after', this.dataUser);
  }
}
