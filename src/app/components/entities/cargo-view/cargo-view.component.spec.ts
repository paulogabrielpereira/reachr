import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoViewComponent } from './cargo-view.component';

describe('CargoViewComponent', () => {
  let component: CargoViewComponent;
  let fixture: ComponentFixture<CargoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
