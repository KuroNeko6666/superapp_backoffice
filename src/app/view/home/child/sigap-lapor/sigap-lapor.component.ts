import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import jsPDF from 'jspdf';
import { BaseChartDirective } from 'ng2-charts';
import { ResponseData } from 'src/app/config/response-config';
import { DashboardModel } from 'src/app/shared/model/dashboard.model';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { ChartService } from '../dashboard/service/chart.service';
import { DashboardService } from '../dashboard/service/dashboard.service';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-sigap-lapor',
  templateUrl: './sigap-lapor.component.html',
  styleUrls: ['./sigap-lapor.component.css']
})
export class SigapLaporComponent {
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

  public sigapRegister?: ChartData<'pie', number[], string | string[]>
  public sigapLaporan?: ChartData<'pie', number[], string | string[]>
  public sigapPelanggaran?: ChartData<'pie', number[], string | string[]>
  public sigapKodeEtik?: ChartData<'pie', number[], string | string[]>
  public sigapPidana?: ChartData<'pie', number[], string | string[]>
  public sigapAsn?: ChartData<'pie', number[], string | string[]>
  public sigapUUlain?: ChartData<'pie', number[], string | string[]>
  public sigapAdministrasi?: ChartData<'pie', number[], string | string[]>

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
      this.setSigapLapor()
      this.loading = false

    })
  }

  exportPDF() {
    let DATA: HTMLElement = document.getElementById('data-table')!
    let PDF = new jsPDF('p', 'mm', 'a4');

    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('data-aktivitas.pdf');
    });


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

  setLaporan(data: any[]) {
    this.userPieChartData = {
      labels: ["Pengguna aktif", "Pengguna tidak aktif"],
      datasets: [{
        data: data,
        backgroundColor: ["rgb(254 215 170)", "rgb(253 186 116)", "rgb(251 146 60)"]
      }]
    };
  }

  setSigapLapor() {
    this.sigapLaporan = {
      labels: ["Jumlah Laporan", "Jumlah Temuan"],
      datasets: [{
        data: [Number(this.service.laporan.data[0].jmllaporan), Number(this.service.laporan.data[0].jmltemuan) ],
        backgroundColor: ["rgb(254 215 170)", "rgb(253 186 116)", "rgb(251 146 60)"]
      }]
    };
    this.sigapAsn = {
      labels: [this.service.asn.data[0].nama, this.service.asn.data[1].nama, this.service.asn.data[2].nama],
      datasets: [{
        data: [Number(this.service.asn.data[0].pct), Number(this.service.asn.data[1].pct), Number(this.service.asn.data[2].pct) ],
        backgroundColor: ["rgb(254 215 170)", "rgb(253 186 116)", "rgb(251 146 60)"]
      }]
    };
    this.sigapKodeEtik = {
      labels: [this.service.kodeetik.data[0].nama, this.service.kodeetik.data[1].nama, this.service.kodeetik.data[2].nama],
      datasets: [{
        data: [Number(this.service.kodeetik.data[0].pct), Number(this.service.kodeetik.data[1].pct), Number(this.service.kodeetik.data[2].pct) ],
        backgroundColor: ["rgb(254 215 170)", "rgb(253 186 116)", "rgb(251 146 60)"]
      }]
    };
    this.sigapPelanggaran = {
      labels: ["Jumlah Bukan Pelanggaran", "Jumlah Pelanggaran"],
      datasets: [{
        data: [Number(this.service.pelanggaran.data[0].jml_bukan_pelanggaran), Number(this.service.pelanggaran.data[0].jml_pelanggaran) ],
        backgroundColor: ["rgb(254 215 170)", "rgb(253 186 116)", "rgb(251 146 60)"]
      }]
    };
    this.sigapPidana = {
      labels: [this.service.pidana.data[0].nama, this.service.pidana.data[1].nama, this.service.pidana.data[2].nama, this.service.pidana.data[3].nama, this.service.pidana.data[4].nama],
      datasets: [{
        data: [Number(this.service.pidana.data[0].pct), Number(this.service.pidana.data[1].pct), Number(this.service.pidana.data[2].pct), Number(this.service.pidana.data[3].pct), Number(this.service.pidana.data[4].pct) ],
        backgroundColor: ["rgb(254 215 170)", "rgb(253 186 116)", "rgb(251 146 60)"]
      }]
    };
    this.sigapRegister = {
      labels: ["Jumlah Registrasi", "Jumlah Proses", "Jumlah Tidak Registrasi"],
      datasets: [{
        data: [Number(this.service.register.data[0].jmlregister), Number(this.service.register.data[0].jmlproses), Number(this.service.register.data[0].jmltidakregister) ],
        backgroundColor: ["rgb(254 215 170)", "rgb(253 186 116)", "rgb(251 146 60)"]
      }]
    };

    this.sigapUUlain = {
      labels: [this.service.uulain.data[0].nama, this.service.uulain.data[1].nama],
      datasets: [{
        data: [Number(this.service.uulain.data[0].pct), Number(this.service.uulain.data[1].pct)],
        backgroundColor: ["rgb(254 215 170)", "rgb(253 186 116)", "rgb(251 146 60)"]
      }]
    };

    this.sigapAdministrasi = {
      labels: [this.service.administrasi.data[0].nama, this.service.administrasi.data[1].nama],
      datasets: [{
        data: [Number(this.service.administrasi.data[0].pct), Number(this.service.administrasi.data[1].pct)],
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
