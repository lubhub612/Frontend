import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { BuyOrderResponse } from '../auth/buyorder-response';
@Component({
  selector: 'app-showbuyhede',
  templateUrl: './showbuyhede.component.html',
  styleUrls: ['./showbuyhede.component.css']
})
export class ShowbuyhedeComponent implements OnInit {

  info: any;
  buyorders: any; 
  buyorderresponses: BuyOrderResponse[];

 // constructor() { }

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
      //////hedbalance: this.token.getBalance(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info);

    let username = this.info.username;
  console.log(username);
    this.authService.showBuyHedUser(username)
    .subscribe( data => {
      ///this.buyorders = data;
      this.buyorderresponses = data;
      console.log(data);
    });

  }


  goHome() :void {
    this.router.navigateByUrl('/home');
  }

}
