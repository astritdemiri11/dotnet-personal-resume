import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BlogItem } from 'src/app/core/models/blog/blog-item.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() item?: BlogItem;
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

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-blog-item, [item] attribute is required');
    }
  }
}
