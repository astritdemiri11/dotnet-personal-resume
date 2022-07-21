import { Component, Input, OnInit } from '@angular/core';
import { ISocialMedia } from 'src/app/core/models/social-media/social-media.model';

@Component({
  selector: 'app-social-media-item',
  templateUrl: './social-media-item.component.html',
  styleUrls: ['./social-media-item.component.scss']
})
export class SocialMediaItemComponent implements OnInit {
  @Input() item?: ISocialMedia;

  constructor() { }

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-social-media-item, [item] attribute is required');
    }
  }
}
