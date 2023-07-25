import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService{
  private readonly TOKEN_KEY = 'jwtToken';

  constructor() {}

  // Save the JWT token to local storage
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Get the JWT token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Remove the JWT token from local storage
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
