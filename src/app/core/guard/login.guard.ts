import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, filter, map, Observable } from 'rxjs';
import { ResponseModel } from 'src/app/shared/model/response.model';
import { NavigateService } from 'src/app/shared/service/navigate.service';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {

  constructor(
    private auth: AuthService,
    private nav: NavigateService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.auth.check().pipe(
        map((res: ResponseModel<string>) => {
          if (res.message != "Success") {
            this.nav.NavigateTo("/auth/login")
            return false;
          } else {
            return true;
          }
        })
      )
  }

}
