import { Component, Input } from '@angular/core';
import { ISocialMedia } from 'src/app/routes/home/models/social-media/social-media.model';
import { Required } from 'src/app/shared/decorators/required/required.decorator';

@Component({
  selector: 'app-social-media-item',
  templateUrl: './social-media-item.component.html',
  styleUrls: ['./social-media-item.component.scss']
})
export class SocialMediaItemComponent {
  @Input() @Required('app-social-media-item') item?: ISocialMedia;
}
