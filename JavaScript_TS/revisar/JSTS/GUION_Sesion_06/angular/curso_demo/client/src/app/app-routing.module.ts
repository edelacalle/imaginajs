import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageloginComponent } from './pages/pagelogin/pagelogin.component';
import { ProveedoresComponent } from './dptos/compras/proveedores/proveedores.component';

const routes: Routes = [
  {path:"login" , component: PageloginComponent, pathMatch:"full" },
  {path:"compras/proveedores" , component: ProveedoresComponent, pathMatch:"full" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
