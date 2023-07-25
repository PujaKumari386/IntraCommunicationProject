import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService{
  private readonly TOKEN_KEY = 'jwtToken';
  private readonly User_ID = "id";

  constructor() {}

  // Save the JWT token to local storage
  setId(id: number): void {
    localStorage.setItem(this.User_ID, id.toString())
  }
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Get the JWT token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getId(): number{
    const id = localStorage.getItem(this.User_ID);
    return Number(id);
  }

  // Remove the JWT token from local storage
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
