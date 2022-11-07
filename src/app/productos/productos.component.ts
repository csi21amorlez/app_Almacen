import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Producto';
import { ServicioProductosService } from '../servicio-productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectProducto(pro:any):Producto{
    pro = ServicioProductosService
    return pro;
  }

}
