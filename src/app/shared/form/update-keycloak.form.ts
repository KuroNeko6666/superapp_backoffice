export class UpdateKeycloakForm {
  private firstname?: string
  private lastname?: string

  constructor( firstname: string, lastname: string){
    this.firstname = firstname
    this.lastname = lastname
  }

  public get FormData(): FormData{
    var form = new FormData()
    form.append("firstname", this.firstname!)
    form.append("lastname", this.lastname!)

    return form
  }

  public get JsonData(): Object {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
    }
  }

}
