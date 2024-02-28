import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _host:string = 'http://localhost:3000';
  private usuarios = [];

  constructor(public  oHttp:HttpClient) { 
      this.oHttp.get(`${this._host}/usuarios`).subscribe({
        next: (data:any) => { 
          this.usuarios = data 
        }  ,
        error: (err) => { console.log("hay error ", err  ) }
      })
  }

  getUsers():Observable<any>{
    return this.oHttp.get(`${this._host}/usuarios`)
  }

  login(user:string, pass:string){
    let oUser = this.usuarios.filter(r => r["user"] == user && r["pass"]==pass)
    if(oUser && oUser.length == 1 ){
      return oUser[0]["permit"];
    }else{
      return null 
    }
  }
}
