import { Component, Input } from '@angular/core';
import { Required } from 'src/app/shared/decorators/required/required.decorator';
import { SharedService } from 'src/app/shared/services/shared.service';

import { IMe } from '../../../models/me/me.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() @Required('app-info') me?: IMe;

  constructor(private sharedService: SharedService) { }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
