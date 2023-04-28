import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {GenerateKeyComponent} from './generate-key/generate-key.component';
import {RegisterComponent} from './register/register.component';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';
import { AuthGuard } from './auth/auth.guard';
import { PaginatorComponent } from './paginator/paginator.component';
import { CreatePostComponent } from './create-post/create-post.component';



const routes: Routes = [
  // {
  //   component: LoginComponent, 
  //   path: ""
  // },
  {
    component: GenerateKeyComponent, canActivate:[AuthGuard],
    path: "generate"
  },
   {
    component: RegisterComponent,
    path: "register"
  },
  {
    component: NotAuthorizedComponent,
    path: "not-authorized"
  },
  {
    component: PaginatorComponent,
    path: "pagination"
  },
  {
    component: CreatePostComponent,
    path: "createpost"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
