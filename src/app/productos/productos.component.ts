import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { MOCK_PRODUCTOS } from '../datos/mock-producto';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  selectedProduct: Producto;
  productos: Producto[] = [];

  constructor(private proServ: ProductosService) {}

  //Cargamos getProductos
  ngOnInit(): void {
    this.getProductos();
  }
  selectProducto(producto: Producto) {
    this.selectedProduct = producto;
  }
  //Indicamos que nos devuelva los onjetos obtenidos del metodo getProducto de servicios
  getProductos(): void {
    this.productos = this.proServ.getProducto();
  }
}
