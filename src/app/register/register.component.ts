import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  signinhed(): void {
    this.router.navigateByUrl('/auth/login');
  }


  importwallet(): void {
    this.router.navigateByUrl('/walletsignup');
  }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      //////this.form.name,
      this.form.username,
      ////this.form.email,
      this.form.password,
      this.form.cpharse);

    this.authService.signUp(this.signupInfo).subscribe(
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
