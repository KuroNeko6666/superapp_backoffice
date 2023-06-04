export class UserModel {
  public id?: number
  public name?: string
  public email?: string
  public role?: string
  public avatar?: any
  public created_at?: string

  constructor(params: UserModel){
    Object.assign(this, params)
  }
}
