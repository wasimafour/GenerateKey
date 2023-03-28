import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {GenerateKeyComponent} from './generate-key/generate-key.component';
import {RegisterComponent} from './register/register.component';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';

const routes: Routes = [
  {
    component: LoginComponent, 
    path: ""
  },
  {
    component: GenerateKeyComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
