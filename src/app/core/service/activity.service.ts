import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityForm } from 'src/app/shared/form/activity.form';
import { ActivityModel } from 'src/app/shared/model/activity.model';
import { PaginateModel } from 'src/app/shared/model/paginate.model';
import { ResponseModel } from 'src/app/shared/model/response.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from './headers.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityApiService {
  private uri = environment.rest_api

  constructor(
    private client: HttpClient,
    private hd: HeaderService
  ) { }

  get(params: HttpParams): Observable<ResponseModel<PaginateModel<ActivityModel[]>>> {
    return this.client.get<ResponseModel<PaginateModel<ActivityModel[]>>>(this.uri.activity.get_all, {headers: this.hd.headers, params: params})
  }

  find(id: number): Observable<ResponseModel<ActivityModel>> {
    return this.client.get<ResponseModel<ActivityModel>>(this.uri.activity.get + id, {headers: this.hd.headers})
  }

  create(data: ActivityForm): Observable<ResponseModel<string>> {
    return this.client.post<ResponseModel<string>>(this.uri.activity.create, data.FormData, {headers: this.hd.headers})
  }

  update(data: ActivityForm, id: number): Observable<ResponseModel<string>> {
    return this.client.put<ResponseModel<string>>(this.uri.activity.update + id, data.FormData, {headers: this.hd.headers})
  }

  delete(id: number): Observable<ResponseModel<string>> {
    return this.client.delete<ResponseModel<string>>(this.uri.activity.delete + id, {headers: this.hd.headers})
  }

  deleteImage(id: number, image_id: number): Observable<ResponseModel<string>> {
    return this.client.delete<ResponseModel<string>>(this.uri.activity.delete_image + id + "/" + image_id, {headers: this.hd.headers})
  }
}
