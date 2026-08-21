import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-login.component',
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  message = signal('');
  messageType: string = '';

  router = inject(Router);
  httpclient = inject(HttpClient);

  onSubmit() {
    this.httpclient.post<User>('http://localhost:3000/api/auth', { email: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log(response);

        if (response.valid) {
          localStorage.setItem('user', JSON.stringify({
            username: response.username,
            birthDate: response.birthDate,
            age: response.age,
            email: response.email,
            valid: response.valid
          }));

          this.messageType = 'success';
          this.message.set('Login successful');

          this.router.navigate(['/home']);

        } else {
          this.messageType = 'fail';
          this.message.set('Invalid email or password');

        }
      },
      error: (error) => {
        console.error(error);

        this.messageType = 'fail';
        this.message.set('Unable to connect to server');
      }
    });
  }
}