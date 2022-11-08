import { Injectable } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor';
import { MOCK_PROVEEDORES } from '../datos/mock-proveedore';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {

  private proveedores: Proveedor[] = [];

  constructor() {
    this.proveedores = MOCK_PROVEEDORES;
  }

  //Obtiene todos los proveedores del MOCK_PROVEEDORES
  getProveedores(): Proveedor[] {
    return this.proveedores;
  }
  //Metodo que busca proveedores por id
  getDetalle(id: number): Proveedor {
    const selectedProveedor = this.proveedores.find(p => p.id === id);
    return selectedProveedor;
  }
}
