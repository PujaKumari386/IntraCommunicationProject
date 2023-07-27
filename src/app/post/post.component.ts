import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ShareService } from '../services/share.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  name = "";
  public groupId: number=0;
  constructor(private postService: PostService, private shareService: ShareService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe(param => {
      this.groupId = param['id'];
    })
    this.getPosts();
  }

  getPosts(): any {
    this.postService.post(this.groupId)
      .subscribe({
        next: (res) => {
          this.posts = res;
          console.log(this.posts);
        }
      })
  }

  gotoAddPost() {
    this.router.navigate([`post/${this.groupId}/addpost`])
  }

  
}