import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ImpuserComponent } from './impuser/impuser.component';
import { PrloginComponent } from './prlogin/prlogin.component';
import { BuyhedeComponent } from './buyhede/buyhede.component';
import { SellhedeComponent } from './sellhede/sellhede.component';
import { HedtransfComponent } from './hedtransf/hedtransf.component';
import { UserComponent } from './user/user.component';
import { HedexlumenComponent } from './hedexlumen/hedexlumen.component';
import { LumenexhedComponent } from './lumenexhed/lumenexhed.component';
import { AdminComponent } from './admin/admin.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ShowbuyhedeComponent } from './showbuyhede/showbuyhede.component';
import { ShowsellhedeComponent } from './showsellhede/showsellhede.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  ///suppressScrollX: true,
  useBothWheelAxes : true
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ImpuserComponent,
    PrloginComponent,
    BuyhedeComponent,
    SellhedeComponent,
    HedtransfComponent,
    UserComponent,
    HedexlumenComponent,
    LumenexhedComponent,
    AdminComponent,
    ShowbuyhedeComponent,
    ShowsellhedeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders,{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
