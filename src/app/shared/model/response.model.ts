import { LoginModel } from "./login.model"

export class ResponseModel<T> {
  public message?: string
  public data?: T
  public page?: number

  constructor(params: ResponseModel<T>){
    Object.assign(this, params)
  }
}
