import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { PrLoginInfo } from '../auth/prlogin-info';

@Component({
  selector: 'app-prlogin',
  templateUrl: './prlogin.component.html',
  styleUrls: ['./prlogin.component.css']
})
export class PrloginComponent implements OnInit {

  form: any = {};
  prloginInfo: PrLoginInfo;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  ////constructor() { }

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
  }


  signuphedp(): void {
    this.router.navigateByUrl('/signup');
  }
  onSubmit() {
    console.log(this.form);

    this.prloginInfo = new PrLoginInfo(
      this.form.hedprivatekey);

    this.authService.attemptPrAuth(this.prloginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.tokenStorage.savePrivatekey(data.privatekey);
        this.tokenStorage.saveAccountid(data.accountid);
        this.tokenStorage.savePublickey(data.publickey);
        this.tokenStorage.savePrivateaddress(data.privateaddress);
        this.tokenStorage.savePublicaddress(data.publicaddress);
        this.tokenStorage.saveBalance(data.balance);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        ///this.reloadPage();
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }


}
