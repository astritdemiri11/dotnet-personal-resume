import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Required } from 'src/app/core/decorators/required/required.decorator';
import { IResumeDetail } from 'src/app/core/models/resume/resume.model';

@Component({
  selector: 'app-resume-detail-item',
  templateUrl: './resume-detail-item.component.html',
  styleUrls: ['./resume-detail-item.component.scss']
})
export class ResumeDetailItemComponent {
  @Input() @Required('app-resume-detail-item') item?: IResumeDetail;

  @ViewChild('detailBall', { static: false }) detailBall?: ElementRef<HTMLDivElement>;

  constructor(private renderer2: Renderer2) { }

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
}
