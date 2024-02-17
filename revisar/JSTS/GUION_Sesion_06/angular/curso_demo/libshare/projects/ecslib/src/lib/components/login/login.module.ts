import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {CardModule}     from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule}  from 'primeng/message';
import {ButtonModule}   from 'primeng/button';


import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth/auth.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    MessageModule,
    MessagesModule,
    ButtonModule
  ],
  providers:[AuthService],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
