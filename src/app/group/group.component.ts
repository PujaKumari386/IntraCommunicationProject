import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { ShareService } from '../services/share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groups: any[] = [];
  name = "";
  constructor(private groupService: GroupService, private shareService: ShareService, private router: Router) { }

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

  callgroup(id:any){
    this.shareService.setgroupId(id);
    this.router.navigate(["post"]);

    
}
}