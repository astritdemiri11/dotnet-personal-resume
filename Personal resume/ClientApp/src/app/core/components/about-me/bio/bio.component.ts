import { Component } from '@angular/core';
import { BioItem } from 'src/app/core/models/bio/bio.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  data: BioItem;

  constructor() {
    this.data = {
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
}
