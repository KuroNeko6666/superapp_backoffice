import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintsComponent } from './prints.component';
import { PrintDashboardComponent } from './pages/print-dashboard/print-dashboard.component';
import { PrintAdminComponent } from './pages/print-admin/print-admin.component';
import { PrintOperatorComponent } from './pages/print-operator/print-operator.component';
import { PrintUserComponent } from './pages/print-user/print-user.component';
import { PrintActivityComponent } from './pages/print-activity/print-activity.component';
import { PrintNewsComponent } from './pages/print-news/print-news.component';

const routes: Routes = [
  {
    path: "",
    component: PrintsComponent,
    children: [
      {
        path: "dashboard",
        component: PrintDashboardComponent
      },
      {
        path: "account/admin",
        component: PrintAdminComponent
      },
      {
        path: "account/operator",
        component: PrintOperatorComponent
      },
      {
        path: "account/user",
        component: PrintUserComponent
      },
      {
        path: "activity",
        component: PrintActivityComponent
      },
      {
        path: "news",
        component: PrintNewsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintsRoutingModule { }
