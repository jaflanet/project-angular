import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DataUser } from '../app.entity';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnackBarService } from '../../service/snackbar/snackbar.service';

@Component({
  selector: 'app-output-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './output-table.component.html',
  styleUrl: './output-table.component.scss',
})
export class OutputTableComponent implements OnInit {
  @Input() dataUser!: DataUser[];
  @Output() userDeleted = new EventEmitter<string>();
  @Output() userChecked = new EventEmitter<any>();
  today: Date = new Date();

  constructor(private snackBarService: SnackBarService) {}

  ngOnInit(): void {}

  deleteUser(email: string) {
    this.userDeleted.emit(email);
    this.snackBarService.openSnackBar('User is successfully deleted', 'Close');
  }

  toggleStrikeThrough(user: any) {
    this.userChecked.emit(user);
  }

  isNearDeadline(paymentDate: Date): boolean {
    const deadline = new Date(paymentDate);
    const diff = deadline.getDate() - this.today.getDate();
    if (diff <= 3) {
      return true;
    } else {
      return false;
    }
  }
}
