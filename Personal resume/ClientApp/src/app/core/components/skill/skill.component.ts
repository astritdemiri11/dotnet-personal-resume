import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

import { ServiceItem } from '../../models/service-item/service-item.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  services: ServiceItem[];

  constructor(private sharedService: SharedService) {
    this.services = [
      { label: 'Sketches', logo: 'logo:sketch', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { label: 'UI/UX Design', logo: 'logo:ui_ux', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { label: 'Product Design', logo: 'logo:product', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { label: 'App Design', logo: 'logo:app', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { label: 'Motion Graphics', logo: 'logo:motion', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { label: 'Responsive Design', logo: 'logo:responsive', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' }
    ]
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
