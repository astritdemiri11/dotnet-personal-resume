import { Component, Input } from '@angular/core';
import { SocialMediaItem } from 'src/app/core/models/social-media/social-media-item.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  @Input() media?: SocialMediaItem[];

  constructor() { }

  ngOnInit() {
    if (this.media == null) {
      throw new Error('app-social-media, [media] attribute is required');
    }
  }
}
