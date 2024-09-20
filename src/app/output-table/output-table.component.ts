import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DataUser } from '../app.entity';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnackBarService } from '../../service/snackbar/snackbar.service';
import { HttpRequestService } from '../../service/http-service/http-response.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-output-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './output-table.component.html',
  styleUrl: './output-table.component.scss',
})
export class OutputTableComponent implements OnInit {
  dataUser: DataUser[] = [];
  @Output() userChecked = new EventEmitter<any>();
  isLoading = false;
  today: Date = new Date();

  constructor(
    private snackBarService: SnackBarService,
    private httpRequestService: HttpRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchDataUser();
  }

  fetchDataUser() {
    this.isLoading = true;
    this.httpRequestService.getData().subscribe(
      (res: any) => {
        this.dataUser = res;
        this.isLoading = false;
        console.log('fetch user completed');
      },
      (err) => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }

  deleteUser(id: any) {
    this.httpRequestService.deleteUser(id).subscribe((res: any) => {
      console.log('success delete user', res);
      this.fetchDataUser();
      this.snackBarService.openSnackBar(
        'User is successfully deleted',
        'Close'
      );
    });
  }

  toggleStrikeThrough(user: any) {
    this.userChecked.emit(user);
  }

  goToForm() {
    this.router.navigate([`/add`]);
  }
  goToCreateForm(id: any) {
    this.router.navigate([`/edit/${id}`]);
  }

  updateUser(id: any, userData: DataUser) {
    userData.isChecked = userData.isChecked;
    this.httpRequestService.updateUser(id, userData).subscribe((res: any) => {
      console.log('User status updated successfully', res.isChecked);
      this.router.navigate([`/`]);
    });
  }

  isNearDeadline(paymentDate: Date): boolean {
    const deadline = new Date(paymentDate);
    const timeDiff = deadline.getTime() - this.today.getTime();
    const diff = timeDiff / (1000 * 3600 * 24);
    if (diff <= 3) {
      return true;
    } else {
      return false;
    }
  }
}
