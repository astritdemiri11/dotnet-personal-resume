import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  constructor(private sharedService: SharedService) { }

  socialMedias: { icon: string, name: string, url: string }[] = [
    { name: 'LinkedIn', icon: 'social-media:linkedin', url: '' },
    { name: 'Github', icon: 'social-media:github', url: '' },
    { name: 'Instagram', icon: 'social-media:instagram', url: '' },
    { name: 'Facebook', icon: 'social-media:facebook', url: '' },
    { name: 'Twitter', icon: 'social-media:twitter', url: '' },
  ]
  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
