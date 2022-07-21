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
      { title: 'Sketches', icon: 'logo:sketch', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { title: 'UI/UX Design', icon: 'logo:ui_ux', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { title: 'Product Design', icon: 'logo:product', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { title: 'App Design', icon: 'logo:app', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { title: 'Motion Graphics', icon: 'logo:motion', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' },
      { title: 'Responsive Design', icon: 'logo:responsive', description: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.' }
    ]
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
