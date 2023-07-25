import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = "https://localhost:44348/api/User/"
  constructor(private http : HttpClient) { }

  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }

  registration(regObj: any){
    return this.http.post<any>(`${this.baseUrl}add`,regObj);
  }

  profile(updateObj: any){
    return this.http.patch<any>(`${this.baseUrl}patch`,updateObj);
  }

  deleteuser(deleteObj: any){
    return this.http.delete<any>(`${this.baseUrl}delete`,deleteObj);
  }
}
