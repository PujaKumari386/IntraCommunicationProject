import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupsUrl = 'https://localhost:44348/api/Groups/'; // Replace this with the actual API endpoint URL

  constructor(private http: HttpClient) { }

  group(){
    return this.http.get<any>(`${this.groupsUrl}Allgroups`);
  }
  
  addgroup(groupObj: any){
    const adminId = localStorage.getItem("id");
    return this.http.post<any>(`${this.groupsUrl}create/${adminId}`,groupObj);
  }
}
