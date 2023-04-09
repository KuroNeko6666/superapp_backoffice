export class ActivityForm {
  private activity_name?: string
  private place?: string
  private time?: string
  private images?: any[] = []

  constructor(activity_name: string, place: string, time: string, images: any){
    this.activity_name = activity_name
    this.place = place
    this.time = time
    this.images = images
  }

  public get FormData(): FormData{
    var form = new FormData()
    form.append("activity_name", this.activity_name!)
    form.append("place", this.place!)
    form.append("time", this.time!)

    this.images?.forEach(element => {
      form.append("images", element)
    });

    return form
  }

  public get JsonData(): Object {
    return {
      activity_name: this.activity_name,
      place: this.place,
      images: this.images,
      time: this.time
    }
  }

}
