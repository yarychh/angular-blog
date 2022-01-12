import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { PostsListPageComponent } from '../posts-list-page/posts-list-page.component';
import { PostPageComponent } from '../post-page/post-page.component';


const routes: Routes = [
  {
    path:'', 
    component: WelcomePageComponent,
    loadChildren: () => import('../welcome-page/welcome-page.module').then(mod => mod.WelcomePageModule)
  },
  {
    path:'posts-list', 
    component: PostsListPageComponent,
    loadChildren: () => import('../posts-list-page/posts-list-page.module').then(mod => mod.PostsListPageModule)
  },
  {
    path:'post/:id', 
    component: PostPageComponent,
    loadChildren: () => import('../post-page/post-page.module').then(mod => mod.PostPageModule)
  }
];

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MainLayoutModule { }
