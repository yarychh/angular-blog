import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createPost(data:any){
    const post : Post = {
      title: data.title,
      date: new Date(),
      text: data.text,
      id: Math.round(Math.random() * 10000),
      author: data.author
    }
    return this.http.post('http://localhost:3000/posts', post)
  }
  editPost(data: any){
    const post: Post = {
      title: data.title,
      text: data.text,
      author: data.author,
      id: data.id,
      date: new Date()
    }
    return this.http.put<Post>(`http://localhost:3000/posts/${post.id}`, post)
  }
  deletePost(id: number){
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
  getAllPosts(){
    return this.http.get<Post[]>(`http://localhost:3000/posts`)
  }
  getPostById(id: number){
    return this.http.get<Post>(`http://localhost:3000/posts/${id}`)
  }
}
