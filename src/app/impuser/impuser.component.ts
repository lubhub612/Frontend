import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ImpSignUpInfo } from '../auth/impsignup-info';

@Component({
  selector: 'app-impuser',
  templateUrl: './impuser.component.html',
  styleUrls: ['./impuser.component.css']
})
export class ImpuserComponent implements OnInit {

  form: any = {};
  impsignupInfo: ImpSignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
 

  ambihed(): void {
    this.router.navigateByUrl('/auth/login');
  }


  biampri(): void {
    this.router.navigateByUrl('/auth/prlogin');
  }


  onSubmit() {
    console.log(this.form);

    this.impsignupInfo = new ImpSignUpInfo(
      this.form.accountid,
      this.form.privatekey,
      this.form.username,
      this.form.password,
      this.form.cpharse);

    this.authService.impSignUp(this.impsignupInfo).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/home');
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
