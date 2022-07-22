import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Required } from 'src/app/shared/decorators/required/required.decorator';

import { IUserReview } from '../../../models/user-review/user-review.model';

@Component({
  selector: 'app-user-review-item',
  templateUrl: './user-review-item.component.html',
  styleUrls: ['./user-review-item.component.scss']
})
export class UserReviewItemComponent {
  @Input() @Required('app-user-review-item') item?: IUserReview;

  @ViewChild('review', { static: false }) review?: ElementRef<HTMLDivElement>;
  @ViewChild('reviewTriangle', { static: false }) reviewTriangle?: ElementRef<HTMLDivElement>;
  @ViewChild('reviewLabel', { static: false }) reviewLabel?: ElementRef<HTMLSpanElement>;

  constructor(private renderer2: Renderer2) { }

  onMouseOver() {
    if(this.review) {
      const reviewElem = this.review.nativeElement;
      this.renderer2.addClass(reviewElem, 'theme-accent_border');
    }

    if(this.reviewTriangle) {
      const reviewTriangleElem = this.reviewTriangle.nativeElement;
      this.renderer2.addClass(reviewTriangleElem, 'theme-accent_border');
    }

    if(this.reviewLabel) {
      const reviewLabelElem = this.reviewLabel.nativeElement;
      this.renderer2.addClass(reviewLabelElem, 'theme-accent_color');
    }
  }

  onMouseLeave() {
    if(this.review) {
      const reviewElem = this.review.nativeElement;
      this.renderer2.removeClass(reviewElem, 'theme-accent_border');
    }

    if(this.reviewTriangle) {
      const reviewTriangleElem = this.reviewTriangle.nativeElement;
      this.renderer2.removeClass(reviewTriangleElem, 'theme-accent_border');
    }

    if(this.reviewLabel) {
      const reviewLabelElem = this.reviewLabel.nativeElement;
      this.renderer2.removeClass(reviewLabelElem, 'theme-accent_color');
    }
  }
}
