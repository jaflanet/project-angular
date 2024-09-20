import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeleteButtonComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoginRoute: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isLoginRoute = this.router.url === '/login';
    });
  }
}
