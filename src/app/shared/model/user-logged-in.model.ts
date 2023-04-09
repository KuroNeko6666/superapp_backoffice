export class UserLoggedInModel {
  public id?: number
  public name?: string
  public email?: string
  public role?: string

  constructor(params: UserLoggedInModel){
    Object.assign(this, params)
  }
}
