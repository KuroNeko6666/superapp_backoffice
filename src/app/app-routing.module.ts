import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guard/login.guard';
import { LogoutGuard } from './core/guard/logout.guard';

const routes: Routes = [
  {
    path: "home",
    canActivate: [LoginGuard],
    loadChildren: () => import("./view/home/home.module").then(m => m.HomeModule),
  },
  {
    path: "auth",
    canActivate: [LogoutGuard],
    loadChildren: () => import("./view/auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
