import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateUserForm } from 'src/app/shared/form/create-user.form';
import { LoginForm } from 'src/app/shared/form/login.form';
import { NotificationForm } from 'src/app/shared/form/notification.form';
import { UpdateUserForm } from 'src/app/shared/form/update-user.form';
import { PaginateModel } from 'src/app/shared/model/paginate.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { NavigateService } from 'src/app/shared/service/navigate.service';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { AccountAdminService } from './service/account-admin.service';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-account-admin',
  templateUrl: './account-admin.component.html',
  styleUrls: ['./account-admin.component.css']
})
export class AccountAdminComponent {
  public account?: UserModel
  public accounts?: PaginateModel<UserModel[]>


  public loading: boolean = true
  public loadingPage: boolean = true
  public obsecure: boolean = true
  public mode: number = 0
  public modalDelete: boolean = false
  public modalAvatar: boolean = false
  public imageUrl?: string

  private accountSubs?: Subscription
  private accountsSubs?: Subscription
  private searchSubs?: Subscription
  private resetSubs?: Subscription
  private loadingSubs?: Subscription
  private loadingPageSubs?: Subscription

  constructor(
    private fb: FormBuilder,
    private service: AccountAdminService,
    private notif: NotificationService,
    public nav: NavigateService
  ) { }

  ngOnInit(): void {

    this.accountSubs = this.service.account.subscribe((res) => {
      this.account = res
      this.email?.setValue(res.email!)
      this.name?.setValue(res.name!)
      this.role?.setValue(res.role == "admin" ? 1 : 2)
    })

    this.accountsSubs = this.service.accounts.subscribe((res) => {
      this.accounts = res
    })

    this.loadingSubs = this.service.loading.subscribe((res) => this.loading = res)
    this.resetSubs = this.service.reset.subscribe((_) => this.reset())
    this.loadingPageSubs = this.service.loadingPage.subscribe((res) => this.loadingPage = res)

    this.searchSubs = this.form.get("search")?.valueChanges.subscribe((res) => {
      res != null ? (this.service.search = res) : (this.service.search = "")
      this.service.offset = 0
      this.service.get()
    })

    this.service.get()
  }

  print(){
    this.nav.NavigateTo('print/account/admin')
  }

  public form = this.fb.group({
    "email": ['', [Validators.email, Validators.required]],
    "name": ['', [Validators.required]],
    "password": ['', [Validators.required, Validators.minLength(8)]],
    "role": [1],
    "search": [""],
  })

  get name() {
    return this.form.get("name")
  }

  get email() {
    return this.form.get("email")
  }

  get password() {
    return this.form.get("password")
  }

  get role() {
    return this.form.get("role")
  }

  onChange(event: any){
    let reader = new FileReader()
    reader.onload = () => {
      this.imageUrl = reader.result as string
    }
    reader.readAsDataURL(event.target.files[0])
    this.service.changeAvatar(event.target.files[0], this.account?.id!)
  }

  create() {
    if (this.email?.valid, this.name?.valid, this.password?.valid) {
      var form = new CreateUserForm(this.name?.value!, this.email?.value!, this.password?.value!, this.role?.value!)
      this.service.create(form)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
      this.email?.markAllAsTouched()
      this.name?.markAllAsTouched()
      this.password?.markAllAsTouched()
    }
  }

  update(id: number) {
    if (this.email?.valid, this.name?.valid) {
      var form = new UpdateUserForm(this.name?.value!, this.email?.value!, this.role?.value!)
      this.service.update(form, id)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
      this.email?.markAllAsTouched()
      this.name?.markAllAsTouched()
      this.password?.markAllAsTouched()
    }
  }

  show(user: UserModel) {
    this.account = user
    this.email?.setValue(user.email!)
    this.name?.setValue(user.name!)
    this.role?.setValue(user.role == "admin" ? 1 : 2)
    this.mode = 2
    this.imageUrl = user.avatar
    // if (true) {
    //   this.service.find(id)
    // } else {
    //   this.notif.Push(new NotificationForm("action failed to execute", "error"))
    //   this.name?.markAllAsTouched()
    // }
  }

  delete(id: number) {
    if (true) {
      this.service.delete(id)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
      this.password?.markAllAsTouched()
    }
  }

  openModalDelete(user: UserModel) {
    this.modalDelete = true
    this.account = user
  }

  openModalAvatar(user: UserModel) {
    this.modalAvatar = true
    this.account = user
  }

  paginator(increase: boolean) {
    if (increase) {
      this.service.offset += this.service.limit
    } else {
      this.service.offset -= this.service.limit
    }
    this.service.get()
  }

  reset() {
    this.form.reset()
    this.account = undefined
    this.mode = 0
    this.modalDelete = false
    this.modalAvatar = false
  }

  obsecureToggle() {
    this.obsecure = !this.obsecure
  }

  changeMode(num: number) {
    this.mode = num
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.accountSubs?.unsubscribe()
    this.accountsSubs?.unsubscribe()
    this.searchSubs?.unsubscribe()
    this.loadingSubs?.unsubscribe()
    this.loadingPageSubs?.unsubscribe()

  }
}
