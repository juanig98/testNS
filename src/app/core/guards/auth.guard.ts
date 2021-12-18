import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): any {
    return this.auth.isLogged().pipe(
      map((response) => {
        if (response) {
          return true
        } else {

          return false;
        }
      }), catchError((err: any) => {

        return throwError(err.statusText);
      }));
  }
  canActivateChild(): any {
    return this.auth.isLogged().pipe(
      map((response) => {
        if (response) {
          return true
        } else {
          return false;
        }
      }), catchError((err: any) => {
        return throwError(err.statusText);
      }));
  }
}
