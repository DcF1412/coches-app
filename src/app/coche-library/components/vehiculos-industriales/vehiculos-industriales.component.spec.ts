import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosIndustrialesComponent } from './vehiculos-industriales.component';

describe('VehiculosIndustrialesComponent', () => {
  let component: VehiculosIndustrialesComponent;
  let fixture: ComponentFixture<VehiculosIndustrialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculosIndustrialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosIndustrialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
