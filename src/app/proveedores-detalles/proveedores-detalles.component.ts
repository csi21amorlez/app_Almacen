import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from '../servicios/proveedores.service';
import { Proveedor } from '../interfaces/proveedor';

@Component({
  selector: 'app-proveedores-detalles',
  templateUrl: './proveedores-detalles.component.html',
  styleUrls: ['./proveedores-detalles.component.css']
})
export class ProveedoresDetallesComponent implements OnInit {

  id: number = 0;
  proveedor:Proveedor;

  //Siempre y cuando una ruta exista, la podra usar
  constructor(private rute:ActivatedRoute, private servProv:ProveedoresService, private location:Location) { }

  ngOnInit(): void {
    //Obtenemos el id de la ruta
    this.id = Number(this.rute.snapshot.paramMap.get('id'));
    this.getDetalleProveedor(this.id);
  }

  //Asignamos el id al proveedor llamando al metodo del servicio
  getDetalleProveedor(id:number):void{
    this.proveedor = this.servProv.getDetalle(id);
  }

  volver():void{
    
  }

}
