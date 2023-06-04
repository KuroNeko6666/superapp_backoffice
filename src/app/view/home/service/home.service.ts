import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { LoginForm } from 'src/app/shared/form/login.form';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private auth: AuthService
  ) { }

  public Logout() {
    this.auth.logout()
  }

}
