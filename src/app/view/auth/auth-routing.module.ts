import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthBaseComponent } from './auth-base/auth-base.component';
import { LoginComponent } from './child/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: AuthBaseComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
