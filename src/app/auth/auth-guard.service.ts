import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private tokenStorage: TokenStorageService) {}

  canActivate() {
    //const isLoggedIn = this.tokenStorage.getToken(); // ... your login logic here
    if (this.tokenStorage.getToken()) {
        ////this.router.navigate(['/home']);
         return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

}