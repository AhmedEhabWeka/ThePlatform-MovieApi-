import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let skipAuthentication = true;
    if(skipAuthentication)
    {
      this._Router.navigate(['/home']);
      return true;

    }
    else
    {
      return true;
    }

    // if(this._AuthService.saveCurrentUser.getValue()==null)
    // {
    //   this._Router.navigate(['/login']);
    //   return false;

    // }
    // else
    // {
    //   return true;
    // }
  }
  
  
}
