import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MENU } from 'src/app/config/menu.config';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  @Output() public menu? = new EventEmitter<MENU>()
  @Output() public current? = new EventEmitter<string>()

  constructor(
    private router: Router
  ) { }

  private setCurrent(url: string): void {
    var menu = new MENU()
    menu.data.map((res) => {
      if (res.path == url || (res.children.length > 0 && url.includes(res.path))) {
        res.collapse = false
        if (res.children.length > 0 && url.includes(res.path)){
          res.children.map(sub => {
            if(sub.path == url){
              sub.collapse = false
            }
          })
        }
      }
    })
    this.current?.emit(url)
    this.menu?.emit(menu)
  }

  public init(): void {
    var current = this.router.url
    this.setCurrent(current)
  }

  public NavigateTo(url: string): void {
    this.router.navigateByUrl(url).then((res) => {
      if (res) {
        this.setCurrent(url)
      }
    })
  }


}
