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

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private uri = environment.rest_api

  constructor(
    private client: HttpClient,
    private hd: HeaderService
  ) { }


  get(params: HttpParams): Observable<ResponseModel<PaginateModel<NewsModel[]>>> {
    return this.client.get<ResponseModel<PaginateModel<NewsModel[]>>>(this.uri.news.get_all, {headers: this.hd.headers, params: params})
  }

  find(id: number): Observable<ResponseModel<NewsModel>> {
    return this.client.get<ResponseModel<NewsModel>>(this.uri.news.get + id, {headers: this.hd.headers})
  }

  create(data: NewsForm): Observable<ResponseModel<string>> {
    return this.client.post<ResponseModel<string>>(this.uri.news.create, data.FormData, {headers: this.hd.headers})
  }

  update(data: NewsForm, id: number): Observable<ResponseModel<string>> {
    return this.client.put<ResponseModel<string>>(this.uri.news.update + id, data.FormData, {headers: this.hd.headers})
  }

  delete(id: number): Observable<ResponseModel<string>> {
    return this.client.delete<ResponseModel<string>>(this.uri.news.delete + id, {headers: this.hd.headers})
  }
}
