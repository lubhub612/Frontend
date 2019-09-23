export class HedLumenAddInfo {
   
    
    lumenpublickey: string;
    hedaccountid: string;
    hedprivatekey: string;
    lumenamount1: string;
    hedamount1: string;

        constructor(lumenpublickey: string, hedaccountid: string, hedprivatekey: string, lumenamount1: string, hedamount1: string) {
       
        this.lumenpublickey = lumenpublickey;
        this.hedaccountid = hedaccountid;
        this.hedprivatekey = hedprivatekey;
        this.lumenamount1 = lumenamount1;
        this.hedamount1 = hedamount1;
        
    }
}
