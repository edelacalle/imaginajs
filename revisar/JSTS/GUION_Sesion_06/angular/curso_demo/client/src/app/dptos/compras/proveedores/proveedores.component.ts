import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../services/compras.service';
import { Observable, last } from 'rxjs';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  $proveedores?: Observable<any> ;

  constructor( public oServ: ComprasService) { }

  ngOnInit(): void {
    this.$proveedores = this.oServ.getProveedor();
   
  }

}
