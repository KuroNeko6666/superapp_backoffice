import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  public get headers(): HttpHeaders{
    var headers = new HttpHeaders({
      "Authorization": "Bearer " + this.token
    })
    return headers
  }

  private get token(): string {
    var token = localStorage.getItem("token") ?? ""
    return token
  }

}
