import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  imports: [FormsModule, NgIf, NgForOf],
})
export class AdminDashboardComponent implements OnInit {
  protected users: any[] = [];
  protected user = {
    id: null,
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    role: 'user',
  };
  protected errors: string[] = [];
  protected isEditMode: boolean = false;

  private apiUrl = 'http://localhost/pokemon/users.php';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // Fetch all users
  protected async getUsers(): Promise<void> {
    try {
      const res = await fetch(this.apiUrl);
      // Check if the response is in JSON format
      const contentType = res.headers.get('Content-Type');
      if (contentType?.includes('application/json')) {
        const data = await res.json();
        this.users = data.map((user: any) => ({
          id: user.id,
          first_name: user['first-name'] || user.first_name,
          last_name: user['last-name'] || user.last_name,
          username: user.username,
          email: user.email,
          password: user.password,
          role: user.role,
        }));
      } else {

        const text = await res.text();
        console.error('Non-JSON response received:', text);
        throw new Error('Expected JSON response, but received something else.');
      }
    } catch (e: any) {
      this.errors.push(e.message || 'Error fetching users.');
      console.error(e.message);
    }
  }


  protected async onSubmit(): Promise<void> {
    this.errors = [];

    // Validation
    if (!this.user.first_name.trim()) this.errors.push('First name is required.');
    if (!this.user.last_name.trim()) this.errors.push('Last name is required.');
    if (!this.user.username.trim()) this.errors.push('Username is required.');
    if (!this.user.email.trim()) this.errors.push('Email is required.');

    if (this.errors.length > 0) return;

    try {
      const method = this.isEditMode ? 'PUT' : 'POST';
      const res = await fetch(this.apiUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.user),
      });

      if (!res.ok) throw new Error('Error saving user.');
      const data = await res.json();

      if (data.error) {
        this.errors.push(data.error);
        return;
      }

      this.getUsers();
      this.resetForm();
      alert(this.isEditMode ? 'User updated.' : 'User added.');
    } catch (e: any) {
      this.errors.push(e.message || 'Error saving user.');
      console.error(e.message);
    }
  }


  protected editUser(user: any): void {
    this.user = { ...user }; // Copy user data
    this.isEditMode = true;
  }


  protected async deleteUser(id: number): Promise<void> {
    try {
      const res = await fetch(this.apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error('Error deleting user.');
      const data = await res.json();

      if (data.error) {
        this.errors.push(data.error);
        return;
      }

      this.getUsers();
      alert('User deleted.');
    } catch (e: any) {
      this.errors.push(e.message || 'Error deleting user.');
      console.error(e.message);
    }
  }


  protected resetForm(): void {
    this.user = {
      id: null,
      first_name: '',  // Updated to match PHP
      last_name: '',   // Updated to match PHP
      username: '',
      email: '',
      password: '',
      role: 'user',
    };
    this.isEditMode = false;
    this.errors = [];
  }
}
