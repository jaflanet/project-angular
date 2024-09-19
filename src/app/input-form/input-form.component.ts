import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataUser } from '../app.entity';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from '../../service/http-service/http-response.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../service/snackbar/snackbar.service';
@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss',
})
export class InputFormComponent implements OnInit {
  dataUser: DataUser[] = [];
  addUserForm: FormGroup;
  isLoading = false;
  isEditMode = false;
  userId: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpRequestService: HttpRequestService,
    private router: Router,
    private snackBarService: SnackBarService
  ) {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      basicSalary: new FormControl('', Validators.required),
      paymentDeadline: new FormControl(new Date(), [Validators.required]),
      isChecked: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      this.isEditMode = params.has('id');

      if (this.isEditMode) {
        this.fetchUserDataById(this.userId!);
      }
    });
  }

  fetchUserDataById(id: string) {
    this.isLoading = true;
    this.httpRequestService.getUserById(id).subscribe(
      (res: DataUser) => {
        this.addUserForm.setValue({
          name: res.name,
          email: res.email,
          username: res.username,
          zipcode: res.zipcode,
          province: res.province,
          city: res.city,
          basicSalary: res.basicSalary,
          paymentDeadline: res.paymentDeadline.toString().split('T')[0],
          isChecked: res.isChecked,
        });
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      const formData: DataUser = this.addUserForm.value;

      if (this.isEditMode && this.userId) {
        this.updateUser(this.userId, formData);
        this.router.navigate([`/`]);
        this.snackBarService.openSnackBar(
          'User is edited successfully',
          'Close'
        );
      } else {
        this.addUser(formData);
        this.router.navigate([`/`]);
        this.snackBarService.openSnackBar(
          'User is added successfully',
          'Close'
        );
      }
    } else {
      console.log('Form is invalid');
    }
  }

  addUser(userData: DataUser) {
    const payload = userData;
    this.httpRequestService.createUser(payload).subscribe((res: any) => {
      console.log('success create user', res);
      this.fetchDataUser();
    });
  }

  updateUser(id: string, userData: DataUser) {
    this.httpRequestService.updateUser(id, userData).subscribe((res: any) => {
      console.log('User updated successfully', res);
      this.fetchDataUser();
    });
  }

  fetchDataUser() {
    this.isLoading = true;
    this.httpRequestService.getData().subscribe(
      (res: any) => {
        this.dataUser = res;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }
}
