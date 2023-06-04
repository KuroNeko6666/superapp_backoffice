import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { LoginForm } from 'src/app/shared/form/login.form';
import { NotificationForm } from 'src/app/shared/form/notification.form';
import { NavigateService } from 'src/app/shared/service/navigate.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginSubs?: Subscription

  constructor(
    private auth: AuthService,
    private notif: NotificationService,
    private nav: NavigateService
  ) { }

  public Login(data: LoginForm) {
    this.loginSubs = this.auth.login(data).subscribe({
      next: (value) => {
        localStorage.setItem("token", value.data?.token!)
        localStorage.setItem("user", JSON.stringify( value.data?.user!))
        this.nav.NavigateTo("/home")
      },
      error: (err) => {
        this.notif.Push(new NotificationForm("login gagal", "error"))
        console.log(err);
      },
    })
  }

  ngOnDestroy(): void {
    this.loginSubs?.unsubscribe()
  }


}
