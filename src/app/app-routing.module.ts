import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component';
import { PostsListPageComponent } from './posts-list-page/posts-list-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path:'', component: MainLayoutComponent, children:[
      {path:'', redirectTo:'/', pathMatch:'full'},
      {path:'', component: WelcomePageComponent},
      {path:'posts-list', component: PostsListPageComponent},
      {path:'post/:id', component:PostPageComponent}
    ]
  },
  {
    path:'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
    }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
