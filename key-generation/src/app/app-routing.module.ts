import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {GenerateKeyComponent} from './generate-key/generate-key.component';
import {RegisterComponent} from './register/register.component';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    component: LoginComponent, 
    path: ""
  },
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
    path: "***"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
