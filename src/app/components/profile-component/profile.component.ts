import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-component',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})

export class ProfileComponent {
  user = {
    username: '',
    birthDate: '',
    age: 0,
    email: '',
    valid: false
  };

  router = inject(Router);

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) { //If no stored user, redirect to login
      this.router.navigate(['/login']);
      return;
    }

    //Convert stored string back into an object
    this.user = JSON.parse(storedUser);

    if (!this.user.valid) { //If invalid user, redirect to login
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  }

  saveProfile(): void {
    //Convert user object to string
    localStorage.setItem('user', JSON.stringify(this.user));
    
    alert('Profile updated successfully');
  }
}
