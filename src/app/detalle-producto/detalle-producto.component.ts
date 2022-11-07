import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../Producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() producto:Producto;

  constructor() { }

  ngOnInit(): void {
  }

  //Para mostar u ocultar el componente en app-root

  mostra:boolean = false;

}
