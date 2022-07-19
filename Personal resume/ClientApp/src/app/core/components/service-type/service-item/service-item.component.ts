import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ServiceItem } from 'src/app/core/models/service-item/service-item.model';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {
  @Input() item?: ServiceItem;

  @ViewChild('iconTitle', { static: false }) iconTitle?: ElementRef<HTMLDivElement>;

  constructor(
    private renderer2: Renderer2) { }

  onMouseOver() {
    if (this.iconTitle) {
      this.renderer2.addClass(this.iconTitle.nativeElement, 'mouse-over');
      this.renderer2.addClass(this.iconTitle.nativeElement, 'theme-accent_color');
    }
  }

  onMouseLeave() {
    if (this.iconTitle) {
      this.renderer2.removeClass(this.iconTitle.nativeElement, 'mouse-over');
      this.renderer2.removeClass(this.iconTitle.nativeElement, 'theme-accent_color');
    }
  }

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-service-item, [item] attribute is required');
    }
  }
}
