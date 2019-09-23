export class ImpSignUpInfo {
    accountid: string;
    privatekey: string;
    username: string;
    role: string[];
    password: string;
    cpharse : string;

    ////constructor(name: string, username: string, email: string, password: string) {
        constructor(accountid: string, privatekey: string, username: string, password: string, cpharse: string) {
        this.accountid = accountid;
        this.privatekey = privatekey;
        this.username = username;
        this.password = password;
        this.cpharse = cpharse;
        this.role = ['user'];
    }
}
