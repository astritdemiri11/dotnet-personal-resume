import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ResumeDetailItem } from 'src/app/core/models/resume-item/resume-item.model';

@Component({
  selector: 'app-resume-detail-item',
  templateUrl: './resume-detail-item.component.html',
  styleUrls: ['./resume-detail-item.component.scss']
})
export class ResumeDetailItemComponent implements OnInit {
  @Input() item?: ResumeDetailItem;

  @ViewChild('detailBall', { static: false }) detailBall?: ElementRef<HTMLDivElement>;

  constructor(
    private renderer2: Renderer2) { }

  onMouseOver() {
    if (this.detailBall) {
      this.renderer2.addClass(this.detailBall.nativeElement, 'theme-accent_background');
    }
  }

  onMouseLeave() {
    if (this.detailBall) {
      this.renderer2.removeClass(this.detailBall.nativeElement, 'theme-accent_background');
    }
  }

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-resume-item, [item] attribute is required');
    }
  }
}
