import { AvatarModel } from "./avatar.model"

export class UserKeycloakModel {
  public user_id?: number
  public username?: string
  public lastname?: string
  public firstname?: string
  public email?: string
  public email_verify?: boolean
  public account_status?: boolean
  public avatar?: AvatarModel
  public role?: string
  public created_at?: string

  constructor(params: UserKeycloakModel){
    Object.assign(this, params)
  }
}
