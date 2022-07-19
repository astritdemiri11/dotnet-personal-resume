import { Component } from '@angular/core';
import { SocialMediaItem } from 'src/app/core/models/social-media/social-media-item.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  socialMedias: SocialMediaItem[];

  constructor() {
    this.socialMedias = [
      { label: 'LinkedIn', icon: 'social-media:linkedin', url: '' },
      { label: 'Github', icon: 'social-media:github', url: '' },
      { label: 'Skype', icon: 'social-media:skype', url: '' },
      { label: 'Instagram', icon: 'social-media:instagram', url: '' },
      { label: 'Facebook', icon: 'social-media:facebook', url: '' },
      { label: 'Twitter', icon: 'social-media:twitter', url: '' },
    ]
  }
}
