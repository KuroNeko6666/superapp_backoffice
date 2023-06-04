import { ActivityImageModel } from "./activity-image.model"

export class ActivityModel {
  public id?: number
  public activity_name?: string
  public place?: string
  public time?: string
  public image?: ActivityImageModel[]
  public created_at?: string

  constructor(params: ActivityModel){
    Object.assign(this, params)
  }
}
