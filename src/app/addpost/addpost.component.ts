import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroupService } from '../services/group.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit{
  constructor(private formBuilder:FormBuilder, private group: GroupService, private router: Router, private tokenService: TokenService){}
  addpost!:FormGroup
  ngOnInit(): void {
    this.addpost = this.formBuilder.group({
      postDescription: ['']
    });
  }


  onAdd() {
    if (this.addpost.valid) {
      console.log(this.addpost.value)
      this.group.addgroup(this.addpost.value)
      .subscribe({
        next:(res=>{
          alert(res.message);
          this.addpost.reset();
          this.router.navigate(['/addpost']);
        }),
        error: (err=>{
          alert(err?.error.message);
        })
      })

      console.log(this.addpost.value)
    } else {
      alert("Your form is invalid");
    }
  }
}
