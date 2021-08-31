import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiacComponent } from './siac.component';

describe('SiacComponent', () => {
  let component: SiacComponent;
  let fixture: ComponentFixture<SiacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
