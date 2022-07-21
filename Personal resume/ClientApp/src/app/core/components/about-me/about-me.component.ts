import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Me } from '../../models/me/me.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  me: Me;

  constructor(private sharedService: SharedService) {
    this.me = {
      name: 'Astrit',
      surname: 'Demiri',
      profession: 'Web Developer',
      description: `I would describe myself as someone who is honest, caring, intelligent, motivated, hardworking, and ambitious.
      I am an easy going person & don’t get easily disturbed by downs in my life. I like to help people to find solutions to their problems.
      I also enjoy working out, traveling, watching movies, going out for dinner, and having great intellectual conversations!`,
      personal: [
        { key: 'Birthday', value: 'June 11, 1994' },
        { key: 'Phone', value: '+355 69-640-2822' },
        { key: 'Email', value: 'astritdemiri11@gmail.com' },
        { key: 'Address', value: 'Tirane 1001, Albania' },
        { key: 'Language', value: 'English, Italian, Turkish' },
        { key: 'Freelance', value: 'Available' }
      ]
    }
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
