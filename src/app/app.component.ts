import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DataUser } from './app.entity';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputFormComponent } from './input-form/input-form.component';
import { OutputTableComponent } from './output-table/output-table.component';
import { UserdataService } from '../service/userdata/userdata.service';

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

  constructor(private userDataService: UserdataService) {}

  ngOnInit(): void {
    const userData = this.userDataService.getUser();
    this.dataUser = userData;
  }

  addUser(userData: DataUser) {
    this.userDataService.addUser(userData);
  }

  deleteUser(email: string) {
    this.userDataService.deleteUser(email);
  }

  toggleStrikeThrough(user: any) {
    this.userDataService.toggleStrikeThrough(user);
  }
}
