import { Injectable } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor';
import { MOCK_PROVEEDORES } from '../datos/mock-proveedore';
import { Producto } from '../interfaces/producto';
import { ProductosComponent } from '../productos/productos.component';
import { MOCK_PRODUCTOS } from '../datos/mock-producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private listProductos:Producto[] = [];

  constructor()
  {
    this.listProductos = MOCK_PRODUCTOS;
  }

  getProducto():Producto[]{
    return this.listProductos;

  }


}
