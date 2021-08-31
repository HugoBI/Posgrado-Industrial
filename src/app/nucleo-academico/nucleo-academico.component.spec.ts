import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoAcademicoComponent } from './nucleo-academico.component';

describe('NucleoAcademicoComponent', () => {
  let component: NucleoAcademicoComponent;
  let fixture: ComponentFixture<NucleoAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NucleoAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NucleoAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
