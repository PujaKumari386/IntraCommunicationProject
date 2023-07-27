import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroupService } from '../services/group.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit{
  constructor(private route: ActivatedRoute,private formBuilder:FormBuilder, private post: PostService, private router: Router, private tokenService: TokenService){}
  addpost!:FormGroup
  groupId!: number; 
  
  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe(param => {
      this.groupId = param['id'];
    })
    this.addpost = this.formBuilder.group({
      postDescription: ['']
    });
  }




  onAdd(description: any) {
   
      console.log(description);
      const postDescription = description;
      const postedOn = this.groupId;
      const postedBy = Number(localStorage.getItem("id"));
      const data = {postDescription, postedOn, postedBy};
      this.post.addpost(data)
      .subscribe({
        next:(res=>{
          alert(res.message);
          this.addpost.reset();
          this.router.navigate(['/post']);
        }),
        error: (err=>{
          alert(err?.error.message);
        })
      })

      console.log(this.addpost.value)
    
  }
  onCancel(){
    this.router.navigate(['/post']);
  }
}
