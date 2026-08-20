import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../../models/customer';

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

  router = inject(Router);
  httpclient = inject(HttpClient);

  onSubmit() {
    console.log('Email', this.email);
    console.log('Password', this.password);
    //this.email = this.email + ' Some other text';

    this.httpclient.post<Customer>('http://localhost:3000/api/login', {email: this.email, password: this.password}).subscribe(
      (response) => {
        console.log(response);
        this.message.set(response.message);
      }
    );
  }
}
