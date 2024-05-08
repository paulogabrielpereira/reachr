import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorViewComponent } from './gestor-view.component';

describe('GestorViewComponent', () => {
  let component: GestorViewComponent;
  let fixture: ComponentFixture<GestorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
