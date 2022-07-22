import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { IService } from '../../models/service/service.model';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent {
  services: IService[];

  constructor(private sharedService: SharedService) {
    this.services = [
      { title: 'Sketches', icon: 'service:sketch', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { title: 'UI/UX Design', icon: 'service:ui_ux', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { title: 'Product Design', icon: 'service:product', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { title: 'App Design', icon: 'service:app', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { title: 'Motion Graphics', icon: 'service:motion', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { title: 'Responsive Design', icon: 'service:responsive', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' }
    ]
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
