import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosTransporteComponent } from './medios-transporte.component';

describe('MediosTransporteComponent', () => {
  let component: MediosTransporteComponent;
  let fixture: ComponentFixture<MediosTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediosTransporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediosTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
