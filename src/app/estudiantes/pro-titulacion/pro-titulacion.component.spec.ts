import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTitulacionComponent } from './pro-titulacion.component';

describe('ProTitulacionComponent', () => {
  let component: ProTitulacionComponent;
  let fixture: ComponentFixture<ProTitulacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProTitulacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProTitulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
