import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesSegundaComponent } from './coches-segunda.component';

describe('CochesSegundaComponent', () => {
  let component: CochesSegundaComponent;
  let fixture: ComponentFixture<CochesSegundaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesSegundaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesSegundaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
