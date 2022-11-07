import { Component, OnInit } from '@angular/core';
import { MOCK_PRODUCTOS } from 'src/mock-producto';
import { Producto } from '../../Producto';
import { ServicioProductosService } from '../servicio-productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = MOCK_PRODUCTOS;
  selectedProducto:Producto;

  constructor() { }

  ngOnInit(): void {
  }

  selectProducto(pro:Producto):Producto{
    return pro;
  }

}
