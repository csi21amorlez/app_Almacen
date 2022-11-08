import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-productos-detalles',
  templateUrl: './productos-detalles.component.html',
  styleUrls: ['./productos-detalles.component.css']
})
export class ProductosDetallesComponent implements OnInit {

  //Recibe el producto
  @Input() producto:Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
