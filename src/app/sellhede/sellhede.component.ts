import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { SellHedInfo } from '../auth/sellhed-info';
import { SellOrderResponse } from '../auth/sellorder-response';
///////////import { setInterval } from 'timers';

@Component({
  selector: 'app-sellhede',
  templateUrl: './sellhede.component.html',
  styleUrls: ['./sellhede.component.css']
})
export class SellhedeComponent implements OnInit {

  info: any;
  sellorders: any;
  lumenprice: any; 
  sellorderresponses: SellOrderResponse[];
  form1: any = {};
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  sellhedInfo: SellHedInfo;

  ///constructor() { }

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

    setInterval(() => {
    this.authService.showlumenprice()
    .subscribe( data => {
      this.lumenprice = data;
      console.log(data);
    })
  },2000);

    /*let username = this.info.username;
    console.log(username);
      this.authService.showSellHedUser(username)
      .subscribe( data => {
        this.sellorderresponses = data;
        console.log(data);
      });*/
    
  }
  

  valuechange(newValue) {
    this.form1.lumenamount = ((newValue)*(0.67)).toString();
    this.form1.totalprice  = ((newValue)*(this.form1.fiatprice)).toString();
    console.log(newValue);
  }

  showSellUser() :void {
    this.router.navigateByUrl('/showsellhedera');
  }

  goHome() :void {
    this.router.navigateByUrl('/home');
  }


  onSubmit() {
    console.log(this.form1);
    this.sellhedInfo = new SellHedInfo(
      this.info.username,
      this.form1.fiatprice,
      this.form1.hedamount,
      this.form1.lumenamount,
      this.form1.totalprice,
      //////this.form1.stoplose
      );
    this.authService.sellHedUser(this.sellhedInfo)
        .subscribe( data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          alert("You Successfully placed an order to sell "+ this.form1.lumenamount +" XLM for " + this.form1.hedamount +" TinyHbars at the price of $"+ this.form1.fiatprice);
          this.form1.fiatprice = 0;
          this.form1.hedamount = 0;
          this.form1.lumenamount = 0;
          this.form1.totalprice = 0;
          ////////this.form1.stoplose = 0;
          this.router.navigateByUrl('/showsellhedera');
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
        
        );

  }

}
