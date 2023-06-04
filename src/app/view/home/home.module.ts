import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeBaseComponent } from './home-base/home-base.component';
import { DashboardComponent } from './child/dashboard/dashboard.component';
import { AccountKeycloakComponent } from './child/account-keycloak/account-keycloak.component';
import { AccountAdminComponent } from './child/account-admin/account-admin.component';
import { AccountOperatorComponent } from './child/account-operator/account-operator.component';
import { NewsComponent } from './child/news/news.component';
import { ActivityComponent } from './child/activity/activity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgChartsModule } from 'ng2-charts';
import { SigapLaporComponent } from './child/sigap-lapor/sigap-lapor.component';
import { SipsComponent } from './child/sips/sips.component';
import { FormAComponent } from './child/form-a/form-a.component';
import { FormCComponent } from './child/form-c/form-c.component';
import { MaintanceComponent } from './child/maintance/maintance.component';


@NgModule({
  declarations: [
    HomeBaseComponent,
    DashboardComponent,
    AccountKeycloakComponent,
    AccountAdminComponent,
    AccountOperatorComponent,
    NewsComponent,
    ActivityComponent,
    SidebarComponent,
    HeaderComponent,
    SigapLaporComponent,
    SipsComponent,
    FormAComponent,
    FormCComponent,
    MaintanceComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    AngularEditorModule,
    NgChartsModule

  ]
})
export class HomeModule { }
