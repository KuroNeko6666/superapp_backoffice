export class NewsModel {
  public id?: number
  public title?: string
  public content?: string
  public thumbnail?: string
  public source?: string
  public created_at?: string

  constructor(params: NewsModel){
    Object.assign(this, params)
  }

}
