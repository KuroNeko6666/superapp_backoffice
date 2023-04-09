export class NewsForm {
  private title?: string
  private content?: string
  private source?: string
  private thumbnail?: any

  constructor(title: string, content: string, source: string, thumbnail: any){
    this.title = title
    this.content = content
    this.source = source
    this.thumbnail = thumbnail
  }

  public get FormData(): FormData{
    var form = new FormData()
    form.append("title", this.title!)
    form.append("content", this.content!)
    form.append("source", this.source!)
    if (this.thumbnail != undefined) {
      form.append("thumbnail", this.thumbnail)
    }
    console.log(form.get(this.thumbnail));

    return form
  }

  public get JsonData(): Object {
    return {
      title: this.title,
      content: this.content,
      thumbnail: this.thumbnail,
      source: this.source
    }
  }


}
