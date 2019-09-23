import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const HEDERAPRIVATE_KEY = 'AuthPrivatekey';
const HEDERAACCOUNT_KEY = 'AuthAccountidkey';
const HEDERAPUBLIC_KEY = 'AuthPublickey';
const AUTHORITIES_KEY = 'AuthAuthorities';
const STELLARPRIVATE_KEY = 'AuthstellarPrivatekey';
const STELLARPUBLIC_KEY = 'AuthstellarPublickey';
const HEDERABALANCE_KEY = 'AuthBalancekey';



@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }


  signOut() {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY,token);
   /* setInterval(() =>{ window.localStorage.removeItem(TOKEN_KEY)
    }, 3*60*1000 );*/
  }

  public getToken(): string {
   ////////return sessionStorage.getItem(TOKEN_KEY);
   return localStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY,username);
    /*setInterval(() =>{ window.localStorage.removeItem(USERNAME_KEY)
    }, 3*60*1000 );*/
  }

  public getUsername(): string {
   /////// return sessionStorage.getItem(USERNAME_KEY);
    return localStorage.getItem(USERNAME_KEY);
  }

  public savePrivatekey(privatekey: string) {
    window.sessionStorage.removeItem(HEDERAPRIVATE_KEY);
    window.sessionStorage.setItem(HEDERAPRIVATE_KEY, privatekey);
    window.localStorage.removeItem(HEDERAPRIVATE_KEY);
    window.localStorage.setItem(HEDERAPRIVATE_KEY,privatekey);
  }

  public getPrivatekey(): string {
    /////console.log(sessionStorage.getItem(HEDERAPRIVATE_KEY));
   /////// console.log(window.sessionStorage);
   //// return sessionStorage.getItem(HEDERAPRIVATE_KEY);
    return localStorage.getItem(HEDERAPRIVATE_KEY);
  }

  public saveAccountid(accountid: string) {
    window.sessionStorage.removeItem(HEDERAACCOUNT_KEY);
    window.sessionStorage.setItem(HEDERAACCOUNT_KEY, accountid);
    window.localStorage.removeItem(HEDERAACCOUNT_KEY);
    window.localStorage.setItem(HEDERAACCOUNT_KEY,accountid);
  }

  public getAccountid(): string {
  //////////  console.log(sessionStorage.getItem(HEDERAACCOUNT_KEY));
    //////return sessionStorage.getItem(HEDERAACCOUNT_KEY);
          return localStorage.getItem(HEDERAACCOUNT_KEY);
  }

  public savePublickey(publickey: string) {
    window.sessionStorage.removeItem(HEDERAPUBLIC_KEY);
    window.sessionStorage.setItem(HEDERAPUBLIC_KEY, publickey);
    window.localStorage.removeItem(HEDERAPUBLIC_KEY);
    window.localStorage.setItem(HEDERAPUBLIC_KEY,publickey);
  }

  public getPublickey(): string {
   //////// console.log(sessionStorage.getItem(HEDERAPUBLIC_KEY));
   //// return sessionStorage.getItem(HEDERAPUBLIC_KEY);
    return localStorage.getItem(HEDERAPUBLIC_KEY);
  }

  public savePrivateaddress(privateaddress: string) {
    window.sessionStorage.removeItem(STELLARPRIVATE_KEY);
    window.sessionStorage.setItem(STELLARPRIVATE_KEY, privateaddress);
    window.localStorage.removeItem(STELLARPRIVATE_KEY);
    window.localStorage.setItem(STELLARPRIVATE_KEY,privateaddress);
  }

  public getPrivateaddress(): string {
    //console.log(sessionStorage.getItem(STELLARPRIVATE_KEY));
    console.log(window.sessionStorage);
    console.log(window.localStorage);
    ///return sessionStorage.getItem(STELLARPRIVATE_KEY);
      return localStorage.getItem(STELLARPRIVATE_KEY);
  }

  public savePublicaddress(publicaddress: string) {
    window.sessionStorage.removeItem(STELLARPUBLIC_KEY);
    window.sessionStorage.setItem(STELLARPUBLIC_KEY, publicaddress);
    window.localStorage.removeItem(STELLARPUBLIC_KEY);
    window.localStorage.setItem(STELLARPUBLIC_KEY,publicaddress);
  }

  public getPublicaddress(): string {
   //////// console.log(sessionStorage.getItem(STELLARPUBLIC_KEY));
    //////return sessionStorage.getItem(STELLARPUBLIC_KEY);
    return localStorage.getItem(STELLARPUBLIC_KEY);
  }

  public saveBalance(balance: string) {
    window.sessionStorage.removeItem(HEDERABALANCE_KEY);
    window.sessionStorage.setItem(HEDERABALANCE_KEY, balance);
    window.localStorage.removeItem(HEDERABALANCE_KEY);
    window.localStorage.setItem(HEDERABALANCE_KEY, balance);
  }

  public getBalance(): string {
    /////console.log(sessionStorage.getItem(HEDERABALANCE_KEY));
    /////return sessionStorage.getItem(HEDERABALANCE_KEY);
    console.log(localStorage.getItem(HEDERABALANCE_KEY));
    return localStorage.getItem(HEDERABALANCE_KEY);
  }


  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    window.localStorage.removeItem(AUTHORITIES_KEY);
    window.localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    /*if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }*/

    if (localStorage.getItem(TOKEN_KEY)) {
      JSON.parse(localStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    } 
    return this.roles;
  }

  /*setTimeout(() =>{
    window.localStorage.clear()
  },1*60*1000);*/
  
  /*setInterval(() => {
    window.localStorage.clear()
  }, 2*60*1000);*/

}
