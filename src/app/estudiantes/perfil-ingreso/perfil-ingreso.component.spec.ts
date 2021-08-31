import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilIngresoComponent } from './perfil-ingreso.component';

describe('PerfilIngresoComponent', () => {
  let component: PerfilIngresoComponent;
  let fixture: ComponentFixture<PerfilIngresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilIngresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
