import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMuestraComponent } from './pagina-muestra.component';

describe('PaginaMuestraComponent', () => {
  let component: PaginaMuestraComponent;
  let fixture: ComponentFixture<PaginaMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMuestraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
