import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDetailItemComponent } from './resume-detail-item.component';

describe('ResumeDetailItemComponent', () => {
  let component: ResumeDetailItemComponent;
  let fixture: ComponentFixture<ResumeDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeDetailItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
