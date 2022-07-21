import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ResumeDetailItem } from 'src/app/core/models/resume/resume-item.model';

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
      const detailElem = this.detailBall.nativeElement;
      this.renderer2.addClass(detailElem, 'theme-accent_background');
    }
  }

  onMouseLeave() {
    if (this.detailBall) {
      const detailElem = this.detailBall.nativeElement;
      this.renderer2.removeClass(detailElem, 'theme-accent_background');
    }
  }

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-resume-item, [item] attribute is required');
    }
  }
}
