import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/interfaces/interfaces';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post!: Post

  constructor(public postService: PostService, public route: ActivatedRoute) { }

  ngOnInit(){
   this.postService.getPostById(this.route.snapshot.params['id']).subscribe((post)=>{
    this.post = post
   })
  }

}
