import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private baseUrl:string = "https://localhost:44348/api/"
  constructor(private http : HttpClient) { }

  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}User/authenticate`,loginObj);
  }

  user(){
    return this.http.get<any>(`${this.baseUrl}User`);
  }

  registration(regObj: any){
    return this.http.post<any>(`${this.baseUrl}User/add`,regObj);
  }

  getuserbyid(userObj: any){
    const adminId = localStorage.getItem("id");
    return this.http.get<any>(`${this.baseUrl}User/getById/${adminId}`,userObj)
  }

  getUserBySearchTerm(name: string): any {
    return this.http.get<any>(`${this.baseUrl}User/${name}`)
  }

  Updateprofile(updateObj: any){
    const adminId = localStorage.getItem("id");
    return this.http.patch<any>(`${this.baseUrl}User/patch/${adminId}`,updateObj);
  }
  
  deleteuser(deleteObj: any){
    return this.http.delete<any>(`${this.baseUrl}User/delete`,deleteObj);
  }
}
