import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'https://localhost:44348/api/Common/'; // Replace this with the actual API endpoint URL

  constructor(private http: HttpClient) { }

  post(groupId: any){
    return this.http.get<any>(`${this.postsUrl}post?groupId=${groupId}`);
  }
}
