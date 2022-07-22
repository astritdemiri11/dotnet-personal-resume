import { Component, Input } from '@angular/core';
import { Required } from 'src/app/shared/decorators/required/required.decorator';

import { ISocialMedia } from '../../../models/social-media/social-media.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  @Input() @Required('app-social-media') media?: ISocialMedia[];
}
