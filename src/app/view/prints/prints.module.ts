import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintsRoutingModule } from './prints-routing.module';
import { PrintsComponent } from './prints.component';
import { PrintActivityComponent } from './pages/print-activity/print-activity.component';
import { PrintNewsComponent } from './pages/print-news/print-news.component';
import { PrintUserComponent } from './pages/print-user/print-user.component';
import { PrintDashboardComponent } from './pages/print-dashboard/print-dashboard.component';
import { PrintAdminComponent } from './pages/print-admin/print-admin.component';
import { PrintOperatorComponent } from './pages/print-operator/print-operator.component';


@NgModule({
  declarations: [
    PrintsComponent,
    PrintActivityComponent,
    PrintNewsComponent,
    PrintUserComponent,
    PrintDashboardComponent,
    PrintAdminComponent,
    PrintOperatorComponent
  ],
  imports: [
    CommonModule,
    PrintsRoutingModule
  ]
})
export class PrintsModule { }
