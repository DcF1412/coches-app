import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesNuevosComponent } from './coches-nuevos.component';

describe('CochesNuevosComponent', () => {
  let component: CochesNuevosComponent;
  let fixture: ComponentFixture<CochesNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesNuevosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
