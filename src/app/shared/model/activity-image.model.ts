export class ActivityImageModel {
  public id?: number
  public image_url?: string

  constructor(params: ActivityImageModel){
    Object.assign(this, params)
  }
}
