export class LoginForm {
  private email?: string
  private password?: string

  constructor(email: string, password: string){
    this.email = email
    this.password = password
  }

  public get FormData(): FormData{
    var form = new FormData()
    form.append("email", this.email!)
    form.append("password", this.password!)

    return form
  }

  public get JsonData(): Object {
    return {
      email: this.email,
      password: this.password
    }
  }

}
