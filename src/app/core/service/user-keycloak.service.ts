import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateKeycloakForm } from 'src/app/shared/form/create-keycloak.form';
import { CreateUserForm } from 'src/app/shared/form/create-user.form';
import { UpdateUserForm } from 'src/app/shared/form/update-user.form';
import { PaginateModel } from 'src/app/shared/model/paginate.model';
import { ResponseModel } from 'src/app/shared/model/response.model';
import { UserKeycloakModel } from 'src/app/shared/model/user-keycloak.model';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from './headers.service';

@Injectable({
  providedIn: 'root'
})
export class UserKeycloakService {
  private uri = environment.rest_api

  constructor(
    private client: HttpClient,
    private hd: HeaderService
  ) { }


  get(params: HttpParams): Observable<ResponseModel<PaginateModel<UserKeycloakModel[]>>> {
    return this.client.get<ResponseModel<PaginateModel<UserKeycloakModel[]>>>(this.uri.keycloak.get_all, {headers: this.hd.headers, params: params})
  }

  find(id: number): Observable<ResponseModel<UserKeycloakModel>> {
    return this.client.get<ResponseModel<UserKeycloakModel>>(this.uri.keycloak.get + id, {headers: this.hd.headers})
  }

  create(data: CreateKeycloakForm): Observable<ResponseModel<string>> {
    return this.client.post<ResponseModel<string>>(this.uri.keycloak.create, data.JsonData, {headers: this.hd.headers})
  }

  update(data: UpdateUserForm, id: number): Observable<ResponseModel<string>> {
    return this.client.put<ResponseModel<string>>(this.uri.keycloak.update + id, data.JsonData, {headers: this.hd.headers})
  }

  delete(id: String): Observable<ResponseModel<string>> {
    return this.client.delete<ResponseModel<string>>(this.uri.keycloak.delete + id, {headers: this.hd.headers})
  }

  updateAvatar(data: any, id: number): Observable<ResponseModel<string>> {
    return this.client.put<ResponseModel<string>>(this.uri.keycloak.change_avatar + id, data, {headers: this.hd.headers})
  }

  ban(bool: Boolean, id: number): Observable<ResponseModel<string>>{
    if(bool){
      return this.client.put<ResponseModel<string>>(this.uri.keycloak.banned + id, {} ,{headers: this.hd.headers})
    } else {
      return this.client.put<ResponseModel<string>>(this.uri.keycloak.unbanned + id, {}, {headers: this.hd.headers})
    }
  }
}
