export class UpdateUserForm {
  private name?: string
  private email?: string
  private role?: number

  constructor(name: string, email: string, role: number){
    this.name = name
    this.email = email
    this.role = role
  }

  public get FormData(): FormData{
    var form = new FormData()
    form.append("name", this.name!)
    form.append("email", this.email!)

    return form
  }

  public get JsonData(): Object {
    return {
      name: this.name,
      email: this.email,
      role: this.role
    }
  }
}
