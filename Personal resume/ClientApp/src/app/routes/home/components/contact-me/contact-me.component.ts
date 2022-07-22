import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

import { IMe } from '../../models/me/me.model';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  me: IMe;

  constructor(private sharedService: SharedService) {
    this.me = {
      bio: `I would describe myself as someone who is honest, caring, intelligent, motivated, hardworking, and ambitious.
      I am an easy going person & don’t get easily disturbed by downs in my life. I like to help people to find solutions to their problems.
      I also enjoy working out, traveling, watching movies, going out for dinner, and having great intellectual conversations!`,
      birthday: 'June 11, 1994',
      contact: {
        addresses: ['Tirane 1001, Albania', 'Tirane 1001, Albania'],
        emails: ['hire-me@astritdemiri.com', 'astritdemiri11@gmail.com'],
        phones: ['+355 69-640-2822', '+355 69-640-2822']
      },
      languages: ['English', 'Italian', 'Turkish'],
      media: [
        { title: 'LinkedIn', icon: 'social-media:linkedin', url: '' },
        { title: 'Github', icon: 'social-media:github', url: '' },
        { title: 'Skype', icon: 'social-media:skype', url: '' },
        { title: 'Instagram', icon: 'social-media:instagram', url: '' },
        { title: 'Facebook', icon: 'social-media:facebook', url: '' },
        { title: 'Twitter', icon: 'social-media:twitter', url: '' },
      ],
      name: 'Astrit',
      profession: 'Web Developer',
      surname: 'Demiri'
    }
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
