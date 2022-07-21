import { Component, Input } from '@angular/core';
import { Required } from 'src/app/core/decorators/required/required.decorator';
import { ISocialMedia } from 'src/app/core/models/social-media/social-media.model';

@Component({
  selector: 'app-social-media-item',
  templateUrl: './social-media-item.component.html',
  styleUrls: ['./social-media-item.component.scss']
})
export class SocialMediaItemComponent {
  @Input() @Required('app-social-media-item') item?: ISocialMedia;
}
