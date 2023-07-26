import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../services/group.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.scss']
})
export class AddgroupComponent implements OnInit{
  constructor(private formBuilder:FormBuilder, private group: GroupService, private router: Router, private tokenService: TokenService){}
  Creategroup!:FormGroup
  ngOnInit(): void {
    this.Creategroup = this.formBuilder.group({
      GroupName: ['', Validators.required],
      Description: ['', Validators.required],
      GroupType: ['0']
      
    });
  }

  onSave() {
    if (this.Creategroup.valid) {
      console.log(this.Creategroup.value)
      this.group.addgroup(this.Creategroup.value)
      .subscribe({
        next:(res=>{
          alert(res.message);
          this.Creategroup.reset();
          this.router.navigate(['/addgroup']);
        }),
        error: (err=>{
          alert(err?.error.message);
        })
      })

      console.log(this.Creategroup.value)
    } else {
      alert("Your form is invalid");
    }
  }

  onCancel() {
     this.router.navigate(['/general']);
  }
}
