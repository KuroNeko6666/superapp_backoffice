import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAdminComponent } from './child/account-admin/account-admin.component';
import { AccountKeycloakComponent } from './child/account-keycloak/account-keycloak.component';
import { AccountOperatorComponent } from './child/account-operator/account-operator.component';
import { ActivityComponent } from './child/activity/activity.component';
import { DashboardComponent } from './child/dashboard/dashboard.component';
import { NewsComponent } from './child/news/news.component';
import { HomeBaseComponent } from './home-base/home-base.component';
import { SigapLaporComponent } from './child/sigap-lapor/sigap-lapor.component';
import { SipsComponent } from './child/sips/sips.component';
import { FormAComponent } from './child/form-a/form-a.component';
import { FormCComponent } from './child/form-c/form-c.component';

const routes: Routes = [
  {
    path: "",
    component: HomeBaseComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "account/admin",
        component: AccountAdminComponent
      },
      {
        path: "account/operator",
        component: AccountOperatorComponent
      },
      {
        path: "account/user",
        component: AccountKeycloakComponent
      },
      {
        path: "activity",
        component: ActivityComponent
      },
      {
        path: "news",
        component: NewsComponent
      },
      {
        path: "sigap-lapor",
        component: SigapLaporComponent
      },
      {
        path: "sips",
        component: SipsComponent
      },
      {
        path: "form-a",
        component: FormAComponent
      },
      {
        path: "form-c",
        component: FormCComponent
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
