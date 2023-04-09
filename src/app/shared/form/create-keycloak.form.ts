export class CreateKeycloakForm {
  private firstname?: string
  private lastname?: string
  private username?: string
  private email?: string
  private password?: string

  constructor( firstname: string, lastname: string, username: string ,email: string, password: string){
    this.firstname = firstname
    this.lastname = lastname
    this.username = username
    this.email = email
    this.password = password
  }

  public get FormData(): FormData{
    var form = new FormData()
    form.append("firstname", this.firstname!)
    form.append("lastname", this.lastname!)
    form.append("username", this.username!)
    form.append("email", this.email!)
    form.append("password", this.password!)

    return form
  }

  public get JsonData(): Object {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password
    }
  }

}
