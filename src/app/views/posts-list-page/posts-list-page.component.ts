import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/interfaces/interfaces';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'app-posts-list-page',
  templateUrl: './posts-list-page.component.html',
  styleUrls: ['./posts-list-page.component.scss']
})
export class PostsListPageComponent implements OnInit {

  posts!: Post[]

  constructor( public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts)=>{
      this.posts = posts
    })
  }

}
