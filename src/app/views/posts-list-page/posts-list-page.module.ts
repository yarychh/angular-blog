import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsListPageComponent } from './posts-list-page.component';



@NgModule({
  declarations: [
    PostsListPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PostsListPageModule { }
