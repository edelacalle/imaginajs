import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturasComponent } from './facturas/facturas.component';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [
    FacturasComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
