import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ResponseModel } from 'src/app/shared/model/response.model';
import { NavigateService } from 'src/app/shared/service/navigate.service';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard {
  constructor(
    private auth: AuthService,
    private nav: NavigateService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.check().pipe(
      map((res: ResponseModel<string>) => {
        if (res.message != "Success") {
          return true;
        } else {
          this.nav.NavigateTo("/home")
          return false;
        }
      })
    )
  }

}
