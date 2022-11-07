import { Producto } from 'src/Producto';
import { MOCK_PRODUCTOS } from 'src/mock-producto';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  constructor() { }

  getProdcutos(): Observable<Producto>{
    return of(MOCK_PRODUCTOS);
  }

}
