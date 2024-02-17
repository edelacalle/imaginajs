import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { FacturasComponent } from './facturas/facturas.component';

//import { ComprasService } from './services/compras.service';
import {TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ProveedoresComponent,
    FacturasComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  providers:[
  
  ]
})
export class ComprasModule { }
