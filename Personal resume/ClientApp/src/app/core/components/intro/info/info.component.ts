import { Component, Input } from '@angular/core';
import { Required } from 'src/app/core/decorators/required/required.decorator';
import { IMe } from 'src/app/core/models/me/me.model';
import { SharedService } from 'src/app/shared/services/shared.service';

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
