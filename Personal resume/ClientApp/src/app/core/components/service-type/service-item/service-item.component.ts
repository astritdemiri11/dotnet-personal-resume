import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {
  @Input() label?: string;
  @Input() logo?: string;
  @Input() description?: string;

  @ViewChild('iconTitle', { static: true }) iconTitle!: ElementRef<HTMLDivElement>;

  constructor(
    private renderer2: Renderer2) { }

  onMouseOver() {
    this.renderer2.addClass(this.iconTitle.nativeElement, 'mouse-over');
    this.renderer2.addClass(this.iconTitle.nativeElement, 'theme-accent_color');
  }

  onMouseLeave() {
    this.renderer2.removeClass(this.iconTitle.nativeElement, 'mouse-over');
    this.renderer2.removeClass(this.iconTitle.nativeElement, 'theme-accent_color');
  }

  ngOnInit() {
    if (this.label == null) {
      throw new Error('app-service-item, [label] attribute is required');
    }

    if (this.logo == null) {
      throw new Error('app-service-item, [logo] attribute is required');
    }

    if (this.description == null) {
      throw new Error('app-service-item, [description] attribute is required');
    }
  }
}
