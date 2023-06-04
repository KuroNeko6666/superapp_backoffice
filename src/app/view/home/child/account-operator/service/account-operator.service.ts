import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponseData } from 'src/app/config/response-config';
import { UserService } from 'src/app/core/service/user.service';
import { CreateUserForm } from 'src/app/shared/form/create-user.form';
import { NotificationForm } from 'src/app/shared/form/notification.form';
import { UpdateUserForm } from 'src/app/shared/form/update-user.form';
import { PaginateModel } from 'src/app/shared/model/paginate.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { NotificationService } from 'src/app/shared/service/notification.service';
@Injectable({
  providedIn: 'root'
})
export class AccountOperatorService {
  @Output() public account = new EventEmitter<UserModel>()
  @Output() public reset = new EventEmitter()
  @Output() public accounts = new EventEmitter<PaginateModel<UserModel[]>>()
  @Output() public loading = new EventEmitter<boolean>()
  @Output() public loadingPage = new EventEmitter<boolean>()

  public search: string = ""
  public sort: string = "desc"
  public limit: number = 10
  public offset: number = 0
  public role: number = 2 // operator
  public response: ResponseData = new ResponseData()

  private getSubs?: Subscription
  private findSubs?: Subscription
  private createSubs?: Subscription
  private deleteSubs?: Subscription
  private updateSubs?: Subscription

  constructor(
    private service: UserService,
    private notif: NotificationService
  ) { }

 public get() {
    this.loading.emit(true)
    var params = new HttpParams()
      .set("search", this.search)
      .append("limit", this.limit)
      .append("offset", this.offset)
      .append("sort", this.sort)
      .append("role", this.role)

    this.getSubs = this.service.get(params).subscribe({
      next: (value) => {
        this.accounts.emit(value.data!)
        this.loadingPage.emit(false)
      },
      error: (err) => {
        console.log(err);
        this.loadingPage.emit(false)
        this.notif.Push(new NotificationForm(this.response.err.get, "error"))
      },
    })
  }

  public find(id: number) {
    this.loadingPage.emit(true)
    this.findSubs = this.service.find(id).subscribe({
      next: (value) => {
        this.account.emit(value.data!)
        this.loadingPage.emit(false)
      },
      error: (err) => {
        console.log(err);
        this.loadingPage.emit(false)
        this.notif.Push(new NotificationForm(this.response.err.get, "error"))
      },
    })
  }

  public create(data: CreateUserForm) {
    this.loading.emit(true)
    this.createSubs = this.service.create(data).subscribe({
      next: (value) => {
        this.reset.emit()
        this.loading.emit(false)
        this.notif.Push(new NotificationForm(this.response.scc.create, "success"))
      },
      error: (err) => {
        console.log(err);
        this.loading.emit(false)
        this.notif.Push(new NotificationForm(this.response.err.create, "error"))
      },
    })
  }

  public update(data: UpdateUserForm, id: number) {
    this.loading.emit(true)
    this.updateSubs = this.service.update(data, id).subscribe({
      next: (value) => {
        this.reset.emit()
        this.loading.emit(false)
        this.get()
        this.notif.Push(new NotificationForm(this.response.scc.update, "success"))
      },
      error: (err) => {
        console.log(err);
        this.loading.emit(false)
        this.notif.Push(new NotificationForm(this.response.err.update, "error"))
      },
    })
  }

  public changeAvatar(data: any, id: number){
    var form = new FormData()
    form.append("avatar", data)
    this.service.updateAvatar(form, id).subscribe({
      next: (value) => {
        this.loading.emit(false)
        this.get()
        this.notif.Push(new NotificationForm(this.response.scc.update, "success"))
      },
      error: (err) => {
        console.log(err);
        this.loading.emit(false)
        this.notif.Push(new NotificationForm(this.response.err.update, "error"))
      },
    })
  }

  public delete(id: number) {
    this.reset.emit()
    this.loading.emit(true)
    this.deleteSubs = this.service.delete(id).subscribe({
      next: (value) => {
        this.loading.emit(false)
        this.get()
        this.notif.Push(new NotificationForm(this.response.scc.delete, "success"))
      },
      error: (err) => {
        console.log(err);
        this.loading.emit(false)
        this.notif.Push(new NotificationForm(this.response.err.delete, "error"))
      },
    })
  }

  ngOnDestroy(): void {
    this.getSubs?.unsubscribe()
    this.findSubs?.unsubscribe()
    this.createSubs?.unsubscribe()
    this.updateSubs?.unsubscribe()
    this.deleteSubs?.unsubscribe()
  }
}
