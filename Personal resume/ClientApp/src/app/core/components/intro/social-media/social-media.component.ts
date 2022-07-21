import { Component, Input } from '@angular/core';
import { Required } from 'src/app/core/decorators/required/required.decorator';
import { ISocialMedia } from 'src/app/core/models/social-media/social-media.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  @Input() @Required('app-social-media') media?: ISocialMedia[];
}
