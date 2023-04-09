import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateKeycloakForm } from 'src/app/shared/form/create-keycloak.form';
import { CreateUserForm } from 'src/app/shared/form/create-user.form';
import { NotificationForm } from 'src/app/shared/form/notification.form';
import { UpdateKeycloakForm } from 'src/app/shared/form/update-keycloak.form';
import { UpdateUserForm } from 'src/app/shared/form/update-user.form';
import { PaginateModel } from 'src/app/shared/model/paginate.model';
import { UserKeycloakModel } from 'src/app/shared/model/user-keycloak.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { NavigateService } from 'src/app/shared/service/navigate.service';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { AccountKeycloakService } from './service/account-keycloak.service';

@Component({
  selector: 'app-account-keycloak',
  templateUrl: './account-keycloak.component.html',
  styleUrls: ['./account-keycloak.component.css']
})
export class AccountKeycloakComponent {
  public account?: UserKeycloakModel
  public accounts?: PaginateModel<UserKeycloakModel[]>


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
    private service: AccountKeycloakService,
    private notif: NotificationService,
    public nav: NavigateService
  ) { }

  ngOnInit(): void {

    this.accountSubs = this.service.account.subscribe((res) => {
      this.account = res
      this.firstname?.setValue(res.firstname!)
      this.lastname?.setValue(res.lastname!)
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

  public form = this.fb.group({
    "firstname": ['', [Validators.required]],
    "lastname": ['', [Validators.required]],
    "username": ['', [Validators.required]],
    "email": ['', [Validators.email, Validators.required]],
    "password": ['', [Validators.required, Validators.minLength(8)]],
    "search": [""],
  })

  get firstname() {
    return this.form.get("firstname")
  }

  get lastname() {
    return this.form.get("lastname")
  }

  get username() {
    return this.form.get("username")
  }

  get email() {
    return this.form.get("email")
  }

  get password() {
    return this.form.get("password")
  }


  create() {
    if (this.email?.valid && this.firstname?.valid && this.lastname?.valid && this.username?.valid && this.password?.valid) {
      var form = new CreateKeycloakForm(this.firstname?.value!, this.lastname?.value!, this.username?.value!, this.email?.value!, this.password?.value!)
      this.service.create(form)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
      this.markTouched()
    }
  }

  update(id: number) {
    if (this.firstname?.valid && this.lastname?.valid) {
      var form = new UpdateKeycloakForm( this.firstname.value!, this.lastname.value!)
      this.service.update(form, id)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
      this.markTouched()
    }
  }

  show(user: UserKeycloakModel) {
    this.account = user
    this.firstname?.setValue(user.firstname!)
    this.lastname?.setValue(user.lastname!)
    this.imageUrl = user.avatar?.avatar_url
    this.mode = 2
    // if (true) {
    //   this.service.find(id)
    // } else {
    //   this.notif.Push(new NotificationForm("action failed to execute", "error"))
    //   this.name?.markAllAsTouched()
    // }
  }

  delete(email: string) {
    if (true) {
      this.service.delete(email)
    } else {
      this.notif.Push(new NotificationForm("action failed to execute", "error"))
      this.password?.markAllAsTouched()
    }
  }

  banned(bool: boolean, id: number) {
    this.service.banned(bool, id)
  }

  openModalDelete(user: UserKeycloakModel) {
    this.modalDelete = true
    this.account = user
  }

  openModalAvatar(user: UserKeycloakModel) {
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

  onChange(event: any){
    let reader = new FileReader()
    reader.onload = () => {
      this.imageUrl = reader.result as string
    }
    reader.readAsDataURL(event.target.files[0])
    this.service.changeAvatar(event.target.files[0], this.account?.user_id!)
  }

  markTouched(){
    this.firstname?.markAllAsTouched()
    this.lastname?.markAllAsTouched()
    this.username?.markAllAsTouched()
    this.email?.markAllAsTouched()
    this.password?.markAllAsTouched()
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
