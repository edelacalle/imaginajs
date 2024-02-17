import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _host:string = 'http://localhost:3000';
  
  constructor(public  oHttp:HttpClient) { 
  
  }

  getProveedores():Observable<any>{
    return this.oHttp.get(`${this._host}/proveedores`)
  }


}
