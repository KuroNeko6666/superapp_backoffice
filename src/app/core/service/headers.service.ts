import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  public get headers(): HttpHeaders{
    var headers = new HttpHeaders({
      "Authorization": "Bearer " + this.token,
      "x-api-key" : "9013d8eea8d59d8099e6b0c8e1cccdf5c4abb15bb3118d04874b07362703ec15",
    })
    return headers
  }

  private get token(): string {
    var token = localStorage.getItem("token") ?? ""
    return token
  }

}
