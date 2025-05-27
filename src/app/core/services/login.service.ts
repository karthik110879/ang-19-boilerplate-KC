import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  // In a real application, you would inject the Router service to handle navigation.


  // Define the API URL for login requests.


  private apiUrl = 'https://example.com/api/auth/login'; // Replace with your API endpoint

  // constructor(private http: HttpClient) {}


  login(credentials: { email: string; password: string }){
    this.router.navigate(['/auth/home']);
  }

  logout(): void {
    // Clear any stored authentication data (e.g., tokens)
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
