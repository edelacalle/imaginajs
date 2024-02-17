import { Injectable } from '@angular/core';
import { DataService } from 'ecslib';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {


  constructor( public oServiceData:DataService ) { }

  getProveedor(){
    return this.oServiceData.getProveedores();
  }
}
