import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { MENU } from 'src/app/config/menu.config';
import { AuthService } from 'src/app/core/service/auth.service';
import { UserModel } from 'src/app/shared/model/user.model';
import { NavigateService } from 'src/app/shared/service/navigate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() closeSidebar = new EventEmitter<void>()
  public menu?: MENU
  public current?: string
  public user?: UserModel

  private menuSubs?: Subscription
  private caurrentSubs?: Subscription

  constructor(
    private nav: NavigateService,
    private auth: AuthService
  ){}

  ngOnInit(): void {
    this.menuSubs = this.nav.menu?.subscribe(res => this.menu = res)
    this.caurrentSubs = this.nav.current?.subscribe(res => this.current = res)
    this.nav.init()
    this.user = this.auth.getUser()
  }

  collapse(i: number){
    this.menu!.data[i].collapse = !this.menu?.data[i].collapse
  }

  navigate(url: string){
    this.nav.NavigateTo(url)
  }

  close(){
    this.closeSidebar.emit()
  }

  ngOnDestroy(): void {
    this.menuSubs?.unsubscribe()
  }
}
