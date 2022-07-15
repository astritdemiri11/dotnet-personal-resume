import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  socialMedias: { icon: string, name: string, url: string }[] = [
    { name: 'LinkedIn', icon: 'social-media:linkedin', url: '' },
    { name: 'Github', icon: 'social-media:github', url: '' },
    { name: 'Skype', icon: 'social-media:skype', url: '' },
    { name: 'Instagram', icon: 'social-media:instagram', url: '' },
    { name: 'Facebook', icon: 'social-media:facebook', url: '' },
    { name: 'Twitter', icon: 'social-media:twitter', url: '' },
  ]
}
