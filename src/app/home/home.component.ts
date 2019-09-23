import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthService } from '../auth/auth.service';
import { LumenHedAddInfo } from '../auth/lumenhedadd-info';
import { HedLumenAddInfo } from '../auth/hedlumenadd-info';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: any;
  /////lumenbalance: any;
  form1: any = {};
  form2: any = {};
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  public config: PerfectScrollbarConfigInterface = {};
  lumenhedaddInfo: LumenHedAddInfo;
  hedlumenaddInfo: HedLumenAddInfo;
  //constructor() { }
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
    /*let publicaddress = this.info.publicaddress;
    this.authService.showlumenbalance(publicaddress)
    .subscribe( data => {
      this.lumenbalance = data;
      console.log(data);
    });*/

  }

  valuechange(newValue) {
    this.form1.hedamount = ((newValue)*(1.5)).toString();
    console.log(newValue);
  }


  valuechange1(newValue1) {
    this.form2.lumenamount1 = ((newValue1)*(0.67)).toString();
    console.log(newValue1);
  }

  buyhed(): void {
    this.router.navigateByUrl('/buyhedera');
  }

  sellhed(): void {
    this.router.navigateByUrl('/sellhedera');
  }

  lhedi(): void {
    this.router.navigateByUrl('/auth/login');
  }

  senthed(): void {
    this.router.navigateByUrl('/senthedera');
  }

 /* exchangeUser(): void {
    console.log(this.form1);
    this.lumenhedaddInfo = new LumenHedAddInfo(
      this.form1.privatekey,
      this.form1.accountid,
      this.form1.hedamount,
      this.form1.lumenamount
      );
    this.authService.exchangeUser(this.lumenhedaddInfo)
        .subscribe( data => {
          alert("User Successfully Exchange Stellar with Hedera.");
        });

  };*/


  exchangeUser1(): void {
    console.log(this.form2);
    this.hedlumenaddInfo = new HedLumenAddInfo(
      this.form2.lumenpublickey,
      this.form2.hedaccountid,
      this.form2.hedprivatekey,
      this.form2.hedamount1,
      this.form2.lumenamount1
      );
    this.authService.exchangeUser1(this.hedlumenaddInfo)
        .subscribe( data => {
          alert("You Successfully Exchange "+this.form2.hedamount1+ " TinyHbar  with " +this.form2.lumenamount1 + " Stellar.");
          this.form2.lumenpublickey  = 0;
          this.form2.hedaccountid = 0;
          this.form2.hedprivatekey = 0;
          this.form2.hedamount1 = 0;
          this.form2.lumenamount1 = 0;
        });

  };

  onSubmit() {
    console.log(this.form1);
    this.lumenhedaddInfo = new LumenHedAddInfo(
      this.form1.privatekey,
      this.form1.accountid,
      this.form1.hedamount,
      this.form1.lumenamount
      );
    this.authService.exchangeUser(this.lumenhedaddInfo)
        .subscribe( data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          alert("You Successfully Exchange "+ this.form1.lumenamount +" Stellar with " + this.form1.hedamount +" TinyHbar.");
          this.form1.privatekey = 0;
          this.form1.accountid = 0;
          this.form1.hedamount = 0;
          this.form1.lumenamount = 0;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
        
        );

  }


  logout() {
    this.token.signOut();
    this.router.navigateByUrl('/auth/login');
    /////////////window.location.reload();
  }
}
