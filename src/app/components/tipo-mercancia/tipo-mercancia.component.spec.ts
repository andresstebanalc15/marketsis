import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMercanciaComponent } from './tipo-mercancia.component';

describe('TipoMercanciaComponent', () => {
  let component: TipoMercanciaComponent;
  let fixture: ComponentFixture<TipoMercanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoMercanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
