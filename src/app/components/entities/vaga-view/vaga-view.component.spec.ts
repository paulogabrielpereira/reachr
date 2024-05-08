import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaViewComponent } from './vaga-view.component';

describe('VagaViewComponent', () => {
  let component: VagaViewComponent;
  let fixture: ComponentFixture<VagaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
