export class PaginateModel<T> {
  public paginate?: T
  public page?: number
  public total_page?: number

  constructor(params: PaginateModel<T>){
    Object.assign(this, params)
  }

}
