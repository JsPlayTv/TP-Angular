import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlockageComponent } from './flockage.component';

describe('FlockageComponent', () => {
  let component: FlockageComponent;
  let fixture: ComponentFixture<FlockageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlockageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
