import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IService } from 'src/app/core/models/service/service.model';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {
  @Input() item?: IService;
  @ViewChild('iconTitle', { static: false }) iconTitle?: ElementRef<HTMLDivElement>;

  constructor(
    private renderer2: Renderer2) { }

  onMouseOver() {
    if (this.iconTitle) {
      const iconTitleElem = this.iconTitle.nativeElement;

      this.renderer2.addClass(iconTitleElem, 'mouse-over');
      this.renderer2.addClass(iconTitleElem, 'theme-accent_color');
    }
  }

  onMouseLeave() {
    if (this.iconTitle) {
      const iconTitleElem = this.iconTitle.nativeElement;

      this.renderer2.removeClass(iconTitleElem, 'mouse-over');
      this.renderer2.removeClass(iconTitleElem, 'theme-accent_color');
    }
  }

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-service-item, [item] attribute is required');
    }
  }
}
