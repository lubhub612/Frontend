export class SellHedInfo {
   
    username: string;
    fiatprice: string;
    hedamount: string;
    lumenamount: string;
    totalprice: string;
    /////stoplose: string;
    role: string[];


    ////constructor(name: string, username: string, email: string, password: string) {
        constructor(username: string, fiatprice: string, hedamount: string, lumenamount: string, totalprice: string) {
       
        this.username = username;
        this.fiatprice = fiatprice;
        this.hedamount = hedamount;
        this.lumenamount = lumenamount;
        this.totalprice = totalprice;
       ///// this.stoplose = stoplose;
        this.role = ['user'];
    }
}
