import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionesComponent } from './generaciones.component';

describe('GeneracionesComponent', () => {
  let component: GeneracionesComponent;
  let fixture: ComponentFixture<GeneracionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
