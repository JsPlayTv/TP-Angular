import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpJuvComponent } from './tp-juv.component';

describe('TpJuvComponent', () => {
  let component: TpJuvComponent;
  let fixture: ComponentFixture<TpJuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpJuvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpJuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
