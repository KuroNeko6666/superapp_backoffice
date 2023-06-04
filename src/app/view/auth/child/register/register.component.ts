import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateUserForm } from 'src/app/shared/form/create-user.form';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private service: RegisterService
  ){}

  public form = this.fb.group({
    "name" : ['', [Validators.required]],
    "email" : ['', [Validators.email, Validators.required]],
    "password" : ['', [Validators.required]],
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

  Register() {
    if (this.form.valid) {
      var form = new CreateUserForm(this.name?.value!, this.email?.value!, this.password?.value!, 1)
      this.service.Register(form)
    }
  }
}
