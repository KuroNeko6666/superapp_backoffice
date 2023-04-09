import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginForm } from 'src/app/shared/form/login.form';
import { CreateUserForm } from 'src/app/shared/form/create-user.form';
import { LoginModel } from 'src/app/shared/model/login.model';
import { ResponseModel } from 'src/app/shared/model/response.model';
import { NavigateService } from 'src/app/shared/service/navigate.service';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from './headers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uri = environment.rest_api

  constructor(
    private client: HttpClient,
    private navigate: NavigateService,
    private hd: HeaderService
  ) { }

  login(data: LoginForm): Observable<ResponseModel<LoginModel>> {
    return this.client.post<ResponseModel<LoginModel>>(this.uri.login, data.JsonData)
  }

  register(data: CreateUserForm): Observable<ResponseModel<string>> {
    return this.client.post<ResponseModel<string>>(this.uri.register, data.JsonData)
  }

  logout(){
    localStorage.clear()
    this.navigate.NavigateTo("/auth/login")
  }

  check(){
    return this.client.get<ResponseModel<string>>(this.uri.check, {headers: this.hd.headers})
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user")!)
  }
}
