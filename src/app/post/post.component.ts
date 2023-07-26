import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  name = "";
  constructor(private postService: PostService, private shareService: ShareService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): any {
    this.postService.post(this.shareService.getgroupId())
      .subscribe({
        next: (res) => {
          this.posts = res;
          console.log(this.posts);
        }
      })
  }
}