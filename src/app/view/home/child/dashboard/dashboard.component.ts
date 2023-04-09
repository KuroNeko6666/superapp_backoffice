import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DashboardService } from './service/dashboard.service';
import { DashboardModel } from 'src/app/shared/model/dashboard.model';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { NotificationForm } from 'src/app/shared/form/notification.form';
import { ResponseData } from 'src/app/config/response-config';
import { ChartService } from './service/chart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  userBarType: string = "weekly"
  loading: boolean = true
  newsActivityBarType: string = "weekly"
  public data?: DashboardModel
  public users?: any
  public typeUsers?: boolean = true
  public typeNewsActivity?: boolean = true

  @ViewChild(BaseChartDirective) chartUser: BaseChartDirective | undefined;
  @ViewChild(BaseChartDirective) chartNewsActivity: BaseChartDirective | undefined;
  @ViewChild(BaseChartDirective) newsBarChart: BaseChartDirective | undefined;

  public weeklyUserData?: ChartConfiguration<'bar'>['data']
  public weeklyNewsActivityData?: ChartConfiguration<'bar'>['data']

  public userPieChartData?: ChartData<'pie', number[], string | string[]>
  public response: ResponseData = new ResponseData()


  constructor(
    public service: DashboardService,
    private notif: NotificationService,
    public chart: ChartService
  ) { }

  ngOnInit(): void {
    this.service.loading.subscribe(res => this.loading = res)

    this.loading = true
    this.service.get().then((_) => {
      this.setUserBarChart(this.service.labels!, this.service.userWeek, this.service.adminWeek, this.service.operatorWeek)
      this.setUserPieChart([this.service.active, this.service.banned])
      this.setNewsActivityBarChart(this.service.labelMonths!, this.service.newsMonth, this.service.activityMonth)
      this.loading = false
    })
  }

  setUserBarChart(labels: string[], user: number[], admin: number[], operator: number[]) {
    this.weeklyUserData = {
      labels: labels,
      datasets: [
        { data: user, label: 'Pengguna', backgroundColor: "rgb(254 215 170)" },
        { data: admin, label: 'Admin', backgroundColor: "rgb(254 215 170)" },
        { data: operator, label: 'Operator', backgroundColor: "rgb(254 215 170)" },
      ]
    };
  }

  setNewsActivityBarChart(labels: string[], news: number[], activity: number[]) {

    this.weeklyNewsActivityData = {
      labels: labels,
      datasets: [
        { data: news, label: 'Berita', backgroundColor: "rgb(254 215 170)" },
        { data: activity, label: 'Aktivitas', backgroundColor: "rgb(253 186 116)" },
      ]
    };
  }

  setUserPieChart(data: number[]) {
    this.userPieChartData = {
      labels: ["Pengguna aktif", "Pengguna tidak aktif"],
      datasets: [{
        data: data,
        backgroundColor: ["rgb(254 215 170)", "rgb(253 186 116)", "rgb(251 146 60)"]
      }]
    };
  }

  changeNewsActivity(bool: boolean){
    this.typeNewsActivity = bool
    if(bool){
      this.setNewsActivityBarChart(this.service.labels!, this.service.newsWeek, this.service.activityWeek)
    } else {
      this.setNewsActivityBarChart(this.service.labelMonths!, this.service.newsMonth, this.service.activityMonth)
    }
  }

  changeUser(bool: boolean){
    this.typeNewsActivity = bool
    if(bool){
      this.setUserBarChart(this.service.labels!, this.service.userWeek, this.service.adminWeek, this.service.operatorWeek)
    } else {
      this.setUserBarChart(this.service.labelMonths!, this.service.userMonth, this.service.adminMonth, this.service.operatorMonth)
    }
  }

}
