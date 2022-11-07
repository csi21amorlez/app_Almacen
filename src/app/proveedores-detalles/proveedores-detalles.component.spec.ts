import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresDetallesComponent } from './proveedores-detalles.component';

describe('ProveedoresDetallesComponent', () => {
  let component: ProveedoresDetallesComponent;
  let fixture: ComponentFixture<ProveedoresDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
