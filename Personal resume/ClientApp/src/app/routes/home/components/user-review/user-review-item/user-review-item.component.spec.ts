import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewItemComponent } from './user-review-item.component';

describe('UserReviewItemComponent', () => {
  let component: UserReviewItemComponent;
  let fixture: ComponentFixture<UserReviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReviewItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
