import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagioComponent } from './plagio.component';

describe('VinculacionComponent', () => {
  let component: PlagioComponent;
  let fixture: ComponentFixture<PlagioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlagioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
