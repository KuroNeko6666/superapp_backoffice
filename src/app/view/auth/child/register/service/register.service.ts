import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { CreateUserForm } from 'src/app/shared/form/create-user.form';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public loadingSubmit: boolean = false

  constructor(
    private auth: AuthService
  ) { }

  public Register(data: CreateUserForm) {
    this.loadingSubmit = true
    this.auth.register(data).subscribe({
      next: (value) => {
        this.loadingSubmit = false
      },
      error: (err) => {
        this.loadingSubmit = false
      },
    })
  }
}
