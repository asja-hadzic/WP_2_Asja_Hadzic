import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-reset',
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  protected username: string = '';
  protected newPassword: string = '';
  protected successMessage: string = '';
  protected errorMessage: string = '';
  protected errors: string[] = [];

  public constructor(private router: Router) {}

  public async onResetPassword() {
    this.errors = [];
    this.errorMessage = '';
    this.successMessage = '';

    // Input validation
    if (!this.username || this.username.trim().length === 0) {
      this.errors.push("Username is required.");
    }

    if (!this.newPassword || this.newPassword.trim().length === 0) {
      this.errors.push("New password is required.");
    }

    if (this.errors.length > 0) {
      console.error("Validation errors:", this.errors);
      return;
    }

    try {
      const response = await fetch('http://localhost/pokemon/reset.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.newPassword,
        }),
      });

      const data = await response.json();

      if (data.success) {
        this.successMessage = data.message || "Password reset successfully!";
        alert(data.message);
      } else {
        this.errorMessage = data.message || "Error resetting password.";
        alert(data.message);
      }
    } catch (error: any) {
      this.errorMessage = "An error occurred. Please try again.";
      console.error("Reset Password error:", error.message);
    }
  }
}
