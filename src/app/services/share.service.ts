import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private groupId!: number;

  constructor() { }

  getgroupId(){
    return this.groupId;
  }

  setgroupId(id: number){
    this.groupId = id;
  }
  
}
