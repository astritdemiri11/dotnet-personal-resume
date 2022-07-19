import { Component, Input, OnInit } from '@angular/core';
import { SocialMediaItem } from 'src/app/core/models/social-media/social-media-item.model';

@Component({
  selector: 'app-social-media-item',
  templateUrl: './social-media-item.component.html',
  styleUrls: ['./social-media-item.component.scss']
})
export class SocialMediaItemComponent implements OnInit {
  @Input() item?: SocialMediaItem;

  constructor() { }

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-social-media-item, [item] attribute is required');
    }
  }
}
