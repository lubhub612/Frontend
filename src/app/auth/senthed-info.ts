export class SentHedInfo {
   
    hedaccountid: string;
    hedprivatekey: string;
    thedaccountid: string;
    hedamount1: string;


    ////constructor(name: string, username: string, email: string, password: string) {
        constructor(hedaccountid: string, hedprivatekey: string, thedaccountid: string, hedamount1: string) {
       
        this.hedaccountid = hedaccountid;
        this.hedprivatekey = hedprivatekey;
        this.thedaccountid = thedaccountid;
        this.hedamount1 = hedamount1;
    }
}
