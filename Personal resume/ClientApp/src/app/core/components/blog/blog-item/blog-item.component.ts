import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Required } from 'src/app/core/decorators/required/required.decorator';
import { IBlog } from 'src/app/core/models/blog/blog.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() @Required('app-blog-item') item?: IBlog;
  @ViewChild('blogLink', { static: false }) blogLink?: ElementRef<HTMLAnchorElement>;

  constructor(private renderer2: Renderer2) { }

  onMouseOver() {
    if(this.blogLink) {
      const linkElem = this.blogLink.nativeElement;
      this.renderer2.addClass(linkElem, 'theme-accent_color');
    }
  }

  onMouseLeave() {
    if(this.blogLink) {
      const linkElem = this.blogLink.nativeElement;
      this.renderer2.removeClass(linkElem, 'theme-accent_color');
    }
  }
}
