import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-item',
  templateUrl: './social-media-item.component.html',
  styleUrls: ['./social-media-item.component.scss']
})
export class SocialMediaItemComponent implements OnInit {
  @Input() label?: string;
  @Input() icon?: string;

  constructor() { }

  ngOnInit() {
    if (this.label == null) {
      throw new Error('app-social-media-item, [label] attribute is required');
    }

    if (this.icon == null) {
      throw new Error('app-social-media-item, [icon] attribute is required');
    }
  }
}
