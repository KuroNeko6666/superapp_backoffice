import { EventEmitter, Injectable, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ResponseData } from 'src/app/config/response-config';
import { DashboardApiService } from 'src/app/core/service/dashboard.service';
import { DashboardModel } from 'src/app/shared/model/dashboard.model';
import { NewsModel } from 'src/app/shared/model/news.model';
import { UserKeycloakModel } from 'src/app/shared/model/user-keycloak.model';
@Injectable({
  providedIn: 'root'
})
export class DashboardSigapService {

  @Output() data = new EventEmitter<DashboardModel>()
  @Output() loading = new EventEmitter<boolean>()
  public response: ResponseData = new ResponseData()

  public users: UserKeycloakModel[] = []

  public adminWeek: number[] = [0, 0, 0, 0, 0, 0, 0]
  public operatorWeek: number[] = [0, 0, 0, 0, 0, 0, 0]
  public userWeek: number[] = [0, 0, 0, 0, 0, 0, 0]
  public newsWeek: number[] = [0, 0, 0, 0, 0, 0, 0]
  public activityWeek: number[] = [0, 0, 0, 0, 0, 0, 0]

  public adminMonth: number[] = [0, 0, 0, 0, 0, 0, 0]
  public operatorMonth: number[] = [0, 0, 0, 0, 0, 0, 0]
  public userMonth: number[] = [0, 0, 0, 0, 0, 0, 0]
  public newsMonth: number[] = [0, 0, 0, 0, 0, 0, 0]
  public activityMonth: number[] = [0, 0, 0, 0, 0, 0, 0]

  public active: number = 0
  public banned: number = 0

  public adminTotal: number = 0
  public operatorTotal: number = 0
  public userTotal: number = 0
  public newsTotal: number = 0
  public activityTotal: number = 0

  public laporan: any = {}
  public pelanggaran: any = {}
  public administrasi: any = {}
  public uulain: any = {}
  public pidana: any = {}
  public asn: any = {}
  public register: any = {}
  public kodeetik: any = {}



  public labels?: string[]
  public labelMonths?: string[]
  public dates?: string[]
  public months?: string[]


  constructor(
    private service: DashboardApiService,
  ) { }



  public async get() {
    this.dates = this.getDate()
    this.months = this.getMonth()
    this.labels = this.getLabels()
    this.labelMonths = this.getLabelMonth()

    this.reset()
    // await lastValueFrom(this.service.get_admin())
    //   .then((res) => {
    //     this.adminTotal = res.data.length
    //     res.data?.forEach((data: any) => {
    //       this.dates?.forEach((date, i) => {
    //         let d = data.created_at?.split("T")[0]
    //         if (date == d) {
    //           this.adminWeek[i] += 1
    //         }
    //       })
    //       this.months?.forEach((date, i) => {
    //         let d = data.created_at.split('T')[0].split('-').slice(0, 2).join('-')
    //         if (date == d) {
    //           this.adminMonth[i] += 1
    //         }
    //       })
    //     })
    //   })
    // await lastValueFrom(this.service.get_operator())
    //   .then((res) => {
    //     this.operatorTotal = res.data.length
    //     res.data?.forEach((data: any) => {
    //       this.dates?.forEach((date, i) => {
    //         let d = data.created_at?.split("T")[0]
    //         if (date == d) {
    //           this.operatorWeek[i] += 1
    //         }
    //       })
    //       this.months?.forEach((date, i) => {
    //         let d = data.created_at.split('T')[0].split('-').slice(0, 2).join('-')
    //         if (date == d) {
    //           this.operatorMonth[i] += 1
    //         }
    //       })
    //     })
    //   })
    // await lastValueFrom(this.service.get_user())
    //   .then((res) => {
    //     this.userTotal = res.data.length
    //     res.data?.forEach((data: UserKeycloakModel) => {
    //       if (data.account_status) {
    //         this.active += 1
    //       } else {
    //         this.banned += 1
    //       }
    //       if (this.users.length < 6) {
    //         this.users.push(data)
    //       }
    //       this.dates?.forEach((date, i) => {
    //         let d = data.created_at?.split("T")[0]
    //         if (date == d) {
    //           this.userWeek[i] += 1
    //         }
    //       })
    //       this.months?.forEach((date, i) => {
    //         let d = data.created_at?.split('T')[0].split('-').slice(0, 2).join('-')
    //         if (date == d) {
    //           this.userMonth[i] += 1
    //         }
    //       })
    //     })
    //   })
    // await lastValueFrom(this.service.get_activity())
    //   .then((res) => {
    //     this.activityTotal = res.data.length
    //     res.data?.forEach((data: any) => {
    //       this.dates?.forEach((date, i) => {
    //         let d = data.created_at?.split("T")[0]
    //         if (date == d) {
    //           this.activityWeek[i] += 1
    //         }
    //       })
    //       this.months?.forEach((date, i) => {
    //         let d = data.created_at.split('T')[0].split('-').slice(0, 2).join('-')
    //         if (date == d) {
    //           this.activityMonth[i] += 1
    //         }
    //       })
    //     })
    //   })

    // await lastValueFrom(this.service.get_news())
    //   .then((res) => {
    //     this.newsTotal = res.data.length
    //     res?.data?.forEach((data: NewsModel) => {
    //       this.dates?.forEach((date, i) => {
    //         let d = data.created_at?.split("T")[0]
    //         if (date == d) {
    //           this.newsWeek[i] += 1
    //         }
    //       })
    //       this.months?.forEach((date, i) => {
    //         let d = data.created_at?.split('T')[0].split('-').slice(0, 2).join('-')
    //         if (date == d) {
    //           this.newsMonth[i] += 1
    //         }
    //       })
    //     })
    //   })

      await lastValueFrom(this.service.get_laporan())
      .then((res) => {

        this.laporan = res;
      })
      await lastValueFrom(this.service.get_asn())
      .then((res) => {
        this.asn = res;
      })
      await lastValueFrom(this.service.get_kodeetik())
      .then((res) => {
        this.kodeetik = res;
      })
      await lastValueFrom(this.service.get_pelanggaran())
      .then((res) => {
        this.pelanggaran = res;
      })
      await lastValueFrom(this.service.get_pidana())
      .then((res) => {
        console.log(res)
        this.pidana = res;
      })
      await lastValueFrom(this.service.get_register())
      .then((res) => {
        this.register = res;
      })
      await lastValueFrom(this.service.get_uulain())
      .then((res) => {
        this.uulain = res;
      })
      await lastValueFrom(this.service.get_administrasi())
      .then((res) => {
       this.administrasi = res;
      })
      // await lastValueFrom(this.service.get_dashboard_formC("Bentuk", "2023-01-01", "2023-05-01"))
      // .then((res) => {
      //   console.log(res);
      // })

  }

  private getDate() {
    let week = []
    for (let index = 0; index < 7; index++) {
      let datee = new Date(new Date().setDate(new Date().getDate() - index)).toISOString()
      let data = datee.split('T')[0]
      week.push(data)
    }
    return week.reverse()
  }

  private getMonth() {
    let month = []
    for (let index = 0; index < 7; index++) {
      let datee = new Date(new Date().setMonth(new Date().getMonth() - (index))).toISOString()
      let data = datee.split('T')[0].split('-').slice(0, 2).join('-')
      month.push(data)
    }
    // console.log(month);

    return month.reverse()
  }

  private getLabelMonth() {
    let month = []
    for (let index = 0; index < 7; index++) {
      let datee = new Date(new Date().setMonth(new Date().getMonth() - (index))).getMonth()
      switch (datee) {
        case 0: month.push("Januari")
          break;
        case 1: month.push("Februari")
          break;
        case 2: month.push("Maret")
          break;
        case 3: month.push("April")
          break;
        case 4: month.push("Meil")
          break;
        case 5: month.push("Juni")
          break;
        case 6: month.push("Juli")
          break;
        case 7: month.push("Agustus")
          break;
        case 8: month.push("September")
          break;
        case 9: month.push("Oktober")
          break;
        case 10: month.push("November")
          break;
        case 11: month.push("Desember")
          break;

        default:
          break;
      }
    }
    return month.reverse()
  }

  private getLabels() {
    let week = []
    for (let index = 0; index < 7; index++) {
      let datee = new Date(new Date().setDate(new Date().getDate() - index)).getDay()
      switch (datee) {
        case 0: week.push("Minggu")
          break;
        case 1: week.push("Senin")
          break;
        case 2: week.push("Selasa")
          break;
        case 3: week.push("Rabu")
          break;
        case 4: week.push("Kamis")
          break;
        case 5: week.push("Jumat")
          break;
        case 6: week.push("Sabtu")
          break;

        default:
          break;
      }


    }
    return week.reverse()
  }

  private reset() {
    this.adminWeek = [0, 0, 0, 0, 0, 0, 0]
    this.operatorWeek = [0, 0, 0, 0, 0, 0, 0]
    this.userWeek = [0, 0, 0, 0, 0, 0, 0]
    this.newsWeek = [0, 0, 0, 0, 0, 0, 0]
    this.activityWeek = [0, 0, 0, 0, 0, 0, 0]
    this.active = 0
    this.banned = 0

    this.adminTotal = 0
    this.operatorTotal = 0
    this.userTotal = 0
    this.newsTotal = 0
    this.activityTotal = 0
  }

}
