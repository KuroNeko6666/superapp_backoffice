import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { UserModel } from 'src/app/shared/model/user.model';
import { NavigateService } from 'src/app/shared/service/navigate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() closeSidebar = new EventEmitter<void>()
  public focus: boolean = false
  public profile: boolean = false
  public user?: UserModel

  constructor(
    private nav: NavigateService,
    private auth: AuthService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.user = this.auth.getUser()

  }

  navigate(url: string){
    this.nav.NavigateTo(url)
  }

  onFocus(data: boolean) {
    this.focus = data
  }

  onProfile() {
    this.profile = !this.profile
  }

  sidebar() {
    this.closeSidebar.emit()
  }

  logout() {
    this.auth.logout()
  }


}
