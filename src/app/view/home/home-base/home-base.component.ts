import { Component } from '@angular/core';
import { MENU } from 'src/app/config/menu.config';
import { AuthService } from 'src/app/core/service/auth.service';
import { NavigateService } from 'src/app/shared/service/navigate.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.css']
})
export class HomeBaseComponent {

  public toggle?: boolean = false
  public menu?: MENU
  public profile?: boolean = false
  public sidebar?: boolean = true
  public focus?: boolean = false

  constructor(
    private service: HomeService,
    private auth: AuthService,
    public nav : NavigateService
  ){}

  ngOnInit(): void {
    this.nav.menu?.subscribe(res => {
      this.menu = res
    })
    this.nav.init()
  }

  onFocusSearch(data: boolean): void {
    this.focus = data
  }

  profileToggle(){
    this.profile = !this.profile
  }

  sidebarToggle(){
    this.sidebar = !this.sidebar
  }

  collapseToggle(index: number){
    this.menu!.data[index].collapse = !this.menu?.data[index].collapse
  }

  navigateTo(url: string){
    this.nav.NavigateTo(url)
  }

  logout(){
    this.auth.logout()
  }
}
