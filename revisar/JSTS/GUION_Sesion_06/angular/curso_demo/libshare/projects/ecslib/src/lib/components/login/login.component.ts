import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string="";
  pass:string="";
  status:string = '';

  @Output() returnEvent = new EventEmitter<any>();

  constructor( private oAuth: AuthService) {
   }

  ngOnInit(): void {
  }

  login(){
    let permit = this.oAuth.login(this.user,this.pass);
    if(!permit){
      this.status = "-ERR Usuario / contraseña No valida "
      this.returnEvent.emit(null)
    }else{
      this.status = "-OK ";
      this.returnEvent.emit(permit)
    }
    

  }

}
