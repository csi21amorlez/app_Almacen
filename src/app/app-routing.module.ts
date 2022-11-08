import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Producto } from './interfaces/producto';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedoresDetallesComponent } from './proveedores-detalles/proveedores-detalles.component';

const routes: Routes = [
//Ruta de producto
  {path:'productos', component: ProductosComponent},
//Ruta de proveedores
  {path:'proveedores', component:ProveedoresComponent},
//Ruta de proveedor detalles
  {path:'proveedorDetalle', component:ProveedoresDetallesComponent},
//Ruta en caso de error
  {path:'**', redirectTo: '*/Producto', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
