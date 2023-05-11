import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsForm } from 'src/app/shared/form/news.form';
import { NewsModel } from 'src/app/shared/model/news.model';
import { PaginateModel } from 'src/app/shared/model/paginate.model';
import { ResponseModel } from 'src/app/shared/model/response.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from './headers.service';
import { DashboardModel } from 'src/app/shared/model/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  private uri = environment.rest_api

  constructor(
    private client: HttpClient,
    private hd: HeaderService
  ) { }


  get_admin(): Observable<ResponseModel<any>> {
    let params = new HttpParams().append("role", 1)
    return this.client.get<ResponseModel<any>>(this.uri.get_all.superuser, {headers: this.hd.headers, params: params})
  }

  get_operator(): Observable<ResponseModel<any>> {
    let params = new HttpParams().append("role", 2)
    return this.client.get<ResponseModel<any>>(this.uri.get_all.superuser, {headers: this.hd.headers, params: params})
  }

  get_user(): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(this.uri.get_all.user, {headers: this.hd.headers})
  }
  get_news(): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(this.uri.get_all.news, {headers: this.hd.headers})
  }
  get_activity(): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(this.uri.get_all.activity, {headers: this.hd.headers})
  }
  get_laporan(): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(this.uri.sigap_lapor.jumlah_laporan, {headers: this.hd.headers})
  }
  get_register(): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(this.uri.sigap_lapor.jumlah_register, {headers: this.hd.headers})
  }
  get_asn(): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(this.uri.sigap_lapor.jumlah_asn, {headers: this.hd.headers})
  }
  get_uulain(): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(this.uri.sigap_lapor.jumlah_uulain, {headers: this.hd.headers})
  }
  get_kodeetik(): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(this.uri.sigap_lapor.jumlah_kode_etik, {headers: this.hd.headers})
  }
  get_pidana(): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(this.uri.sigap_lapor.jumlah_pidana, {headers: this.hd.headers})
  }
  get_pelanggaran(): Observable<ResponseModel<any>> {
    return this.client.get<ResponseModel<any>>(this.uri.sigap_lapor.jumlah_pelanggaran, {headers: this.hd.headers})
  }

}
