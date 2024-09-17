import { Component, Input, OnInit } from '@angular/core';
import { DataUser } from '../app/app.entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-output-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output-table.component.html',
  styleUrl: './output-table.component.scss',
})
export class OutputTableComponent implements OnInit {
  @Input() dataUser!: DataUser[];

  constructor() {}

  ngOnInit(): void {
    console.log('data user', this.dataUser);
  }
}
