import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { SentHedInfo } from '../auth/senthed-info';

@Component({
  selector: 'app-hedtransf',
  templateUrl: './hedtransf.component.html',
  styleUrls: ['./hedtransf.component.css']
})
export class HedtransfComponent implements OnInit {

  info: any;
  form1: any = {};
  senthedInfo: SentHedInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private token: TokenStorageService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      privatekey: this.token.getPrivatekey(),
      accountid: this.token.getAccountid(),
      publickey: this.token.getPublickey(),
      privateaddress: this.token.getPrivateaddress(),
      publicaddress: this.token.getPublicaddress(),
      balance: this.token.getBalance(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info);
  }


  goHome() :void {
    this.router.navigateByUrl('/home');
  }


  onSubmit() {
    console.log(this.form1);
    this.senthedInfo = new SentHedInfo(
      this.form1.hedaccountid,
      this.form1.hedprivatekey,
      this.form1.thedaccountid,
      this.form1.hedamount1
      );

      this.authService.sentHedUser(this.senthedInfo)
        .subscribe( data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          alert("You Successfully Transfer "+ this.form1.hedamount + " TinyHbar to " +  this.form1.thedaccountid + " .");
          this.form1.hedaccountid = 0;
          this.form1.hedprivatekey = 0;
          this.form1.thedaccountid = 0;
          this.form1.hedamount1 = 0;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
        
        );

  }

}
