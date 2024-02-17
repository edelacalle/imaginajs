import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageloginComponent } from './pages/pagelogin/pagelogin.component';
import { UnauthComponent } from './pages/unauth/unauth.component';


import { HttpClientModule } from '@angular/common/http';

import { ComprasModule } from './dptos/compras/compras.module';


import {ButtonModule} from 'primeng/button';
import {MenubarModule } from 'primeng/menubar';


import { LoginModule  } from 'ecslib';

import { DataModule, DataService } from 'ecslib';


@NgModule({
  declarations: [
    AppComponent,
    PageloginComponent,
    UnauthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule,
    LoginModule,
    DataModule,
    ComprasModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
