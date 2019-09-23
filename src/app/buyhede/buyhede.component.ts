import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { BuyHedInfo } from '../auth/buyhed-info';
import { BuyOrderResponse } from '../auth/buyorder-response';
///////import { setInterval } from 'timers';

@Component({
  selector: 'app-buyhede',
  templateUrl: './buyhede.component.html',
  styleUrls: ['./buyhede.component.css']
})
export class BuyhedeComponent implements OnInit {

  info: any;
  buyorders: any; 
  lumenprice: any; 
  lumenbtcprice: any;
  hedbtcprice: any;
  buyorderresponses: BuyOrderResponse[];
  form1: any = {};
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  buyhedInfo: BuyHedInfo;
 //// constructor() { }


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
      authorities: this.token.getAuthorities(),

    };
    console.log(this.info);
   
  setInterval(() => {
    this.authService.showlumenprice()
    .subscribe( data => {
     this.lumenprice = data;
      console.log(data);
    })
  },2000);


  setInterval(() => {
    this.authService.showbtclumenprice()
    .subscribe( data1 => {
     this.lumenbtcprice = data1;
      console.log(data1);
    })
  },2000);


  setInterval(() => {
   
    this.authService.showbtchedprice()
    .subscribe( data2 => {
     this.hedbtcprice = data2;
      console.log(data2);
    })
  },2000);
    

  /*let username = this.info.username;
  console.log(username);
    this.authService.showBuyHedUser(username)
    .subscribe( data => {
      ///this.buyorders = data;
      this.buyorderresponses = data;
      console.log(data);
    });
*/

  }

  


  valuechange(newValue) {
    this.form1.lumenamount = ((newValue)*(0.66)).toString();
    this.form1.totalprice  = ((newValue)*(this.form1.fiatprice)).toString();
    console.log(newValue);
  }

  showBuyUser() :void {
    this.router.navigateByUrl('/showbuyhedera');
  }

  goHome() :void {
    this.router.navigateByUrl('/home');
  }

  onSubmit() {
    console.log(this.form1);
    this.buyhedInfo = new BuyHedInfo(
      this.info.username,
      this.form1.fiatprice,
      this.form1.hedamount,
      this.form1.lumenamount,
      this.form1.totalprice,
      //this.form1.stoplose
      );
    this.authService.buyHedUser(this.buyhedInfo)
        .subscribe( data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          alert("You successfully placed an order to buy "+ this.form1.lumenamount +" XLM for " + this.form1.hedamount +" TinyHbars at the price of $"+ this.form1.fiatprice);
          this.form1.fiatprice = 0;
          this.form1.hedamount = 0;
          this.form1.lumenamount = 0;
          this.form1.totalprice = 0;
          ///this.form1.stoplose = 0;
         this.router.navigateByUrl('/showbuyhedera');
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
        
        );

  }

}
