import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (1 == 2) {
      console.log("can active route");
      return true;
    }
    console.log("can't active route");
    this.router.navigate(['/profile']);
    return false;
  }
}