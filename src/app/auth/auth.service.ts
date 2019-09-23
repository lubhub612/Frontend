import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { LumenHedAddInfo } from './lumenhedadd-info';
import { HedLumenAddInfo } from './hedlumenadd-info';
import { PrLoginInfo } from './prlogin-info';
import { ImpSignUpInfo } from './impsignup-info';
import { BuyHedInfo } from './buyhed-info';
import { SellHedInfo } from './sellhed-info';
import { BuyOrderResponse } from './buyorder-response';
import { SellOrderResponse } from './sellorder-response';
import { XlmPriceResponse } from './xlmprice-response';
import { SentHedInfo } from '../auth/senthed-info';
import { XlmBtcPriceResponse } from './xlmbtcprice-response';
import { HedBtcpriceResponse } from './hedbtcprice-response';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8005/api/auth/signin';
  private signupUrl = 'http://localhost:8005/api/auth/signup';
  private lumenexUrl = 'http://localhost:8005/api/auth/hedexlumen';
  private hedexUrl = 'http://localhost:8005/api/auth/lumenexhed';
  private prloginUrl = 'http://localhost:8005/api/auth/searchpk';
  private impsignupUrl = 'http://localhost:8005/api/auth/impsignup';
  private buyhedUrl = 'http://localhost:8005/api/auth/buytradeuser';
  private sellhedUrl = 'http://localhost:8005/api/auth/selltradeuser';
  private buyhedUrl1 = 'http://localhost:8005/api/auth/showbuytradeuser';
  private sellhedUrl1 = 'http://localhost:8005/api/auth/showselltradeuser';
  private lumenpriceurl = 'https://apiv2.bitcoinaverage.com/indices/local/ticker/XLMUSD';
  private senthedUrl = 'http://localhost:8005/api/auth/hedtransfer';
  private lumenbtcpriceurl = 'https://api.bittrex.com/api/v1.1/public/getticker?market=BTC-XLM';
  private hedbtcpriceurl = 'https://api.bittrex.com/api/v1.1/public/getticker?market=BTC-HBAR';

  /*private loginUrl = 'http://167.99.74.254:8005/api/auth/signin';
  private signupUrl = 'http://167.99.74.254:8005/api/auth/signup';
  private lumenexUrl = 'http://167.99.74.254:8005/api/auth/hedexlumen';
  private hedexUrl = 'http://167.99.74.254:8005/api/auth/lumenexhed';
  private prloginUrl = 'http://167.99.74.254:8005/api/auth/searchpk';
  private impsignupUrl = 'http://167.99.74.254:8005/api/auth/impsignup';
  private buyhedUrl = 'http://167.99.74.254:8005/api/auth/buytradeuser';
  private sellhedUrl = 'http://167.99.74.254:8005/api/auth/selltradeuser';
  private buyhedUrl1 = 'http://167.99.74.254:8005/api/auth/showbuytradeuser';
  private sellhedUrl1 = 'http://167.99.74.254:8005/api/auth/showselltradeuser';
  private lumenpriceurl = 'https://apiv2.bitcoinaverage.com/indices/local/ticker/XLMUSD';
  private lumenbalanceurl = 'https://horizon.stellar.org/accounts';
  private senthedUrl = 'http://167.99.74.254:8005/api/auth/hedtransfer';*/
  

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
 
  exchangeUser(info2: LumenHedAddInfo): Observable<string> {
    return this.http.post<string>(this.lumenexUrl, info2, httpOptions);
  }
   
  exchangeUser1(info3: HedLumenAddInfo): Observable<string> {
    return this.http.post<string>(this.hedexUrl, info3, httpOptions);
  }

  attemptPrAuth(credentials1: PrLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.prloginUrl, credentials1, httpOptions);
  }
  
  impSignUp(info4: ImpSignUpInfo): Observable<string> {
    return this.http.post<string>(this.impsignupUrl, info4, httpOptions);
  }

  buyHedUser(info5: BuyHedInfo): Observable<string> {
    return this.http.post<string>(this.buyhedUrl, info5, httpOptions);
  }
  
  sellHedUser(info6: SellHedInfo): Observable<string> {
    return this.http.post<string>(this.sellhedUrl, info6, httpOptions);
  }
  

   showBuyHedUser(username: string) {
    return this.http.get<BuyOrderResponse[]>(this.buyhedUrl1 + "/"+ username,httpOptions);
  }

   showSellHedUser(username: string) {
    return this.http.get<SellOrderResponse[]>(this.sellhedUrl1 + "/"+ username,httpOptions);
  }
  
  showlumenprice(){
    return this.http.get<XlmPriceResponse>(this.lumenpriceurl,httpOptions);
  }

  sentHedUser(info7: SentHedInfo): Observable<string> {
    return this.http.post<string>(this.senthedUrl, info7, httpOptions);
  }
  
  showbtclumenprice(){
    return this.http.get<XlmBtcPriceResponse>(this.lumenbtcpriceurl,httpOptions);
  }


   showbtchedprice(){
      return this.http.get<HedBtcpriceResponse>(this.hedbtcpriceurl,httpOptions);
  }


}
