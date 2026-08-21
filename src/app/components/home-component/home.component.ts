import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home.component',
  imports: [
    RouterModule,
    RouterOutlet,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }
}
