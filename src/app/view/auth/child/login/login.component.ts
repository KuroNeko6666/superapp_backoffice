import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginForm } from 'src/app/shared/form/login.form';
import { NotificationForm } from 'src/app/shared/form/notification.form';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loadingSubmit: boolean = false
  public obsecure: boolean = true

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    public notif: NotificationService
  ){}

  public form = this.fb.group({
    "email" : ['', [Validators.email, Validators.required]],
    "password" : ['', [Validators.required]]
  })

  get email() {
    return this.form.get("email")
  }

  get password() {
    return this.form.get("password")
  }

  obsecureToggle(){
    this.obsecure = !this.obsecure
  }

  Login() {

    if (this.email?.valid && this.password?.valid) {
      var form = new LoginForm(this.email?.value!, this.password?.value!)
      this.service.Login(form)
    } else {
      console.log("err");

      this.notif.Push(new NotificationForm("action failed to execute", "error"))

      this.email?.markAllAsTouched()
      this.password?.markAllAsTouched()
    }
  }

}
