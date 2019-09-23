export class SignUpInfo {
    ////name: string;
    username: string;
    //////email: string;
    role: string[];
    password: string;
    cpharse : string;

    ////constructor(name: string, username: string, email: string, password: string) {
        constructor(username: string, password: string, cpharse: string) {
        ////this.name = name;
        this.username = username;
        //////this.email = email;
        this.password = password;
        this.cpharse = cpharse;
        this.role = ['user'];
    }
}
