import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LoginModule } from 'projects/ecslib/src/public-api'; 
import { AuthModule }   from 'projects/ecslib/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule, 
    LoginModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
