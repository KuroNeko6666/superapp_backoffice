export class CreateUserForm {
  private name?: string
  private email?: string
  private password?: string
  private role?: number

  constructor(name: string, email: string, password: string, role: number){
    this.name = name
    this.email = email
    this.password = password
    this.role = role
  }

  public get FormData(): FormData{
    var form = new FormData()
    form.append("name", this.name!)
    form.append("email", this.email!)
    form.append("role", this.role!.toString())
    form.append("password", this.password!)

    return form
  }

  public get JsonData(): Object {
    return {
      name: this.name,
      email: this.email,
      role: this.role,
      password: this.password
    }
  }

}
