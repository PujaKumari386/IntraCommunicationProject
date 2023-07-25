import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groups: any[] = [];
  name = "";
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups();
    
  }

  getGroups(): any {
    this.groupService.group()
      .subscribe({
        next: (res) => {
          this.groups = res;
          console.log(this.groups);
          
        }
      })

  }
}