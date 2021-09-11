import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesAlquilerComponent } from './coches-alquiler.component';

describe('CochesAlquilerComponent', () => {
  let component: CochesAlquilerComponent;
  let fixture: ComponentFixture<CochesAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesAlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
