import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './views/post-page/post-page.component';
import { PostsListPageComponent } from './views/posts-list-page/posts-list-page.component';
import { MainLayoutComponent } from './views/main-layout/main-layout.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path:'', 
    component: MainLayoutComponent, 
    loadChildren: () => import('./views/main-layout/main-layout.module').then(mod => mod.MainLayoutModule)
  },
  {
    path:'admin', 
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
