import { Component } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hederapplicationfrontend';
  private roles: string[];
  public  authority: string;

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }
 

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else {
          this.authority = 'user';
        return true;
        }
      });
    }
    

    }
    

  }
  


