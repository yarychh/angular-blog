import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainLayoutComponent } from "../shared/components/main-layout/main-layout.component";
import { FormType } from "./shared/components/admin-layout/form-type-enum";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path:'', component: MainLayoutComponent, children:[
                {path:'', redirectTo:'/admin/login', pathMatch:'full'},
                {path:'login', component: LoginPageComponent},
                {path:'register', component: RegisterPageComponent},
                {path:'create', component: PostFormComponent, data:{ formType: FormType.CREATE }},
                {path:'post/:id/edit', component: PostFormComponent, data:{ formType: FormType.UPDATE }},
                {path:'posts-list', redirectTo: '/posts-list', pathMatch:'full'}
            ]}
        ])
    ],
    exports:[
        RouterModule
    ],
    declarations: [
      AdminLayoutComponent,
      LoginPageComponent,
      RegisterPageComponent,
      PostFormComponent
    ]
})

export class AdminModule{

}