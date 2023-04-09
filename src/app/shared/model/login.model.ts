import { UserLoggedInModel } from "./user-logged-in.model"

export class LoginModel {
  public token?: string
  public user?: UserLoggedInModel

  constructor(params: LoginModel){
    Object.assign(this, params)
  }
}
