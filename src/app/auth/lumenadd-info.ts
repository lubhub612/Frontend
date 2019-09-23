export class LumenAddInfo {
   
    username: string;
    role: string[];


    ////constructor(name: string, username: string, email: string, password: string) {
        constructor(username: string) {
       
        this.username = username;
       
        this.role = ['user'];
    }
}
