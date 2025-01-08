import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected username: string = '';
  protected password: string = '';
  protected errors: string[] = [];
  protected errorMessage: string = ''; // For API error messages

  public constructor(private router: Router) {}

  public async onLogin() {
    this.errors = [];
    this.errorMessage = '';

    // Input validation
    if (!this.username || this.username.trim().length === 0) {
      this.errors.push("Username is required.");
    }

    if (!this.password || this.password.trim().length === 0) {
      this.errors.push("Password is required.");
    }

    if (this.errors.length > 0) {
      console.error("Validation errors:", this.errors);
      return;
    }

    try {
      const response = await fetch('http://localhost/pokemon/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });

      const data = await response.json();

     if (data.success) {
        if (data.role === 'admin') {
          alert("Welcome, Admin!");
          this.router.navigate(['/admin-dashboard']);
        } else if (data.role === 'user') {
          alert("Login successful!");
          this.router.navigate(['/kartica']);
        } else {
          this.errorMessage = "Unknown user role.";
        }

      } else {
        this.errorMessage = data.message || "Invalid username or password.";
      }
    } catch (error: any) {
      this.errorMessage = "An error occurred. Please try again.";
      console.error("Login error:", error.message);
    }

    }
  }
