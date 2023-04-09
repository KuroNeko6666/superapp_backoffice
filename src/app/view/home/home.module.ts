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
