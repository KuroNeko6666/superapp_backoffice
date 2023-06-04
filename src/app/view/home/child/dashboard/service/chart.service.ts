import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { lastValueFrom } from 'rxjs';
import { ResponseData } from 'src/app/config/response-config';
import { ActivityApiService } from 'src/app/core/service/activity.service';
import { DashboardApiService } from 'src/app/core/service/dashboard.service';
import { NewsApiService } from 'src/app/core/service/news.service';
import { UserKeycloakService } from 'src/app/core/service/user-keycloak.service';
import { UserService } from 'src/app/core/service/user.service';
import { NotificationForm } from 'src/app/shared/form/notification.form';
import { ActivityModel } from 'src/app/shared/model/activity.model';
import { DashboardModel } from 'src/app/shared/model/dashboard.model';
import { NewsModel } from 'src/app/shared/model/news.model';
import { UserKeycloakModel } from 'src/app/shared/model/user-keycloak.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { NotificationService } from 'src/app/shared/service/notification.service';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private service: DashboardApiService,
  ) { }
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: { x: {}, y: { min: 0 } },
    plugins: {
      legend: {
        display: true,
        position: "top"
      },
    }
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];

  // Pie

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ["Pengguna aktif", "Pengguna tidak aktif"],
    datasets: [{
      data: [300, 500]
    }]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [];

}
