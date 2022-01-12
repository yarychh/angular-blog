import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post

  constructor(public authService: AuthService, public postService: PostService) { }

  ngOnInit(): void {
    
    
  }

  remove(){
    console.log(this.post.id);
    
    this.postService.deletePost(this.post.id).subscribe(()=>{
      location.reload();
    })
  }

}
