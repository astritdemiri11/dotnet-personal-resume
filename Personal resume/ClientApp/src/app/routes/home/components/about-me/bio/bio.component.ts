import { Component, Input } from '@angular/core';
import { Required } from 'src/app/shared/decorators/required/required.decorator';

import { IMe } from '../../../models/me/me.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  @Input() @Required('app-bio') me?: IMe;
}
