import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ServiceItem } from '../../models/service-item/service-item.model';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent {
  services: ServiceItem[];

  constructor(private sharedService: SharedService) {
    this.services = [
      { label: 'Sketches', logo: '.assets/images/', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { label: 'UI/UX Design', logo: '', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { label: 'Product Design', logo: '', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { label: 'App Design', logo: '', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { label: 'Motion Graphics', logo: '', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { label: 'Responsive Design', logo: '', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' }
    ]
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
