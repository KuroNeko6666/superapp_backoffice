import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserForm } from 'src/app/shared/form/create-user.form';
import { UpdateUserForm } from 'src/app/shared/form/update-user.form';
import { LoginModel } from 'src/app/shared/model/login.model';
import { PaginateModel } from 'src/app/shared/model/paginate.model';
import { ResponseModel } from 'src/app/shared/model/response.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from './headers.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri = environment.rest_api

  constructor(
    private client: HttpClient,
    private hd: HeaderService
  ) { }


  get(params: HttpParams): Observable<ResponseModel<PaginateModel<UserModel[]>>> {
    return this.client.get<ResponseModel<PaginateModel<UserModel[]>>>(this.uri.user.get_all, {headers: this.hd.headers, params: params})
  }

  find(id: number): Observable<ResponseModel<UserModel>> {
    return this.client.get<ResponseModel<UserModel>>(this.uri.user.get + id, {headers: this.hd.headers})
  }

  create(data: CreateUserForm): Observable<ResponseModel<string>> {
    return this.client.post<ResponseModel<string>>(this.uri.user.create, data.JsonData, {headers: this.hd.headers})
  }

  update(data: UpdateUserForm, id: number): Observable<ResponseModel<string>> {
    return this.client.put<ResponseModel<string>>(this.uri.user.update + id, data.JsonData, {headers: this.hd.headers})
  }

  delete(id: number): Observable<ResponseModel<string>> {
    return this.client.delete<ResponseModel<string>>(this.uri.user.delete + id, {headers: this.hd.headers})
  }

  updateAvatar(data: any, id: number): Observable<ResponseModel<string>> {
    return this.client.put<ResponseModel<string>>(this.uri.user.change_avatar + id, data, {headers: this.hd.headers})
  }



}
