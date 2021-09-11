import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesKm0Component } from './coches-km0.component';

describe('CochesKm0Component', () => {
  let component: CochesKm0Component;
  let fixture: ComponentFixture<CochesKm0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesKm0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesKm0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
