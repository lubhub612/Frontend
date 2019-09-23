export class LumenHedAddInfo {
   
    
    privatekey: string;
    accountid: string;
    hedamount: string;
    lumenamount: string;

        constructor(privatekey: string, accountid: string, hedamount: string, lumenamount: string) {
       
        this.privatekey = privatekey;
        this.accountid = accountid;
        this.hedamount = hedamount;
        this.lumenamount = lumenamount;
       
        
    }
}
