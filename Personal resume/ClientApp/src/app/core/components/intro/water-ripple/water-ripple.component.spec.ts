import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterRippleComponent } from './water-ripple.component';

describe('WaterRippleComponent', () => {
  let component: WaterRippleComponent;
  let fixture: ComponentFixture<WaterRippleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterRippleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
