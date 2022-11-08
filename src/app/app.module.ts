import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosDetallesComponent } from './productos-detalles/productos-detalles.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedoresDetallesComponent } from './proveedores-detalles/proveedores-detalles.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,    
    ProductosComponent, ProductosDetallesComponent, ProveedoresComponent, ProveedoresDetallesComponent, MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
