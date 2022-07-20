import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserReviewItem } from 'src/app/core/models/user-review-item/user-review-item.model';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';

@Component({
  selector: 'app-user-review-item',
  templateUrl: './user-review-item.component.html',
  styleUrls: ['./user-review-item.component.scss']
})
export class UserReviewItemComponent implements OnInit {
  @Input() item?: UserReviewItem;

  @ViewChild('reviewContainer', { static: false }) reviewContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('review', { static: false }) review?: ElementRef<HTMLDivElement>;
  @ViewChild('reviewTriangle', { static: false }) reviewTriangle?: ElementRef<HTMLDivElement>;
  @ViewChild('reviewLabel', { static: false }) reviewLabel?: ElementRef<HTMLSpanElement>;

  constructor(private renderer2: Renderer2, private layoutService: LayoutService) {
    const layoutEvents = this.layoutService.getEvents();

    layoutEvents.windowResize$.subscribe(() => {
      if (this.reviewContainer) {
        const reviewContainer = this.reviewContainer.nativeElement;
        this.renderer2.setStyle(reviewContainer, 'height', reviewContainer.offsetWidth + 'px');
      }
    });
  }

  onMouseOver() {
    if(this.review) {
      this.renderer2.addClass(this.review.nativeElement, 'theme-accent_border');
    }

    if(this.reviewTriangle) {
      this.renderer2.addClass(this.reviewTriangle.nativeElement, 'theme-accent_border');
    }

    if(this.reviewLabel) {
      this.renderer2.addClass(this.reviewLabel.nativeElement, 'theme-accent_color');
    }
  }

  onMouseLeave() {
    if(this.review) {
      this.renderer2.removeClass(this.review.nativeElement, 'theme-accent_border');
    }

    if(this.reviewTriangle) {
      this.renderer2.removeClass(this.reviewTriangle.nativeElement, 'theme-accent_border');
    }

    if(this.reviewLabel) {
      this.renderer2.removeClass(this.reviewLabel.nativeElement, 'theme-accent_color');
    }
  }

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-user-review-item, [item] attribute is required');
    }
  }



  ngAfterViewInit() {
    if (this.reviewContainer) {
      const reviewContainer = this.reviewContainer.nativeElement;
      this.renderer2.setStyle(reviewContainer, 'height', reviewContainer.offsetWidth + 'px');
    }
  }
}
