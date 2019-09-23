import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ImpuserComponent } from './impuser/impuser.component';
import { PrloginComponent } from './prlogin/prlogin.component';
import { BuyhedeComponent } from './buyhede/buyhede.component';
import { SellhedeComponent } from './sellhede/sellhede.component';
import { HedtransfComponent } from './hedtransf/hedtransf.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ShowbuyhedeComponent } from './showbuyhede/showbuyhede.component';
import { ShowsellhedeComponent } from './showsellhede/showsellhede.component';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
},
{
    path: 'user',
    component: UserComponent
},
{
    path: 'admin',
    component: AdminComponent
},
{
    path: 'auth/login',
    component: LoginComponent
},
{
    path: 'auth/prlogin',
    component: PrloginComponent
},
{
    path: 'signup',
    component: RegisterComponent
},
{
    path: 'walletsignup',
    component: ImpuserComponent
},
{
    path: 'buyhedera',
    component: BuyhedeComponent
},
{
    path: 'sellhedera',
    component: SellhedeComponent
},
{
    path: 'senthedera',
    component: HedtransfComponent
},
{
    path: 'showbuyhedera',
    component: ShowbuyhedeComponent
},
{
    path: 'showsellhedera',
    component: ShowsellhedeComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule { }
