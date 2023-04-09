export class AvatarModel {
  public user_id?: number
  public avatar_id?: number
  public avatar_url?: string

  constructor(params: AvatarModel){
    Object.assign(this, params)
  }
}
