import { Component, Input } from '@angular/core';
import { Required } from 'src/app/shared/decorators/required/required.decorator';

import { IResume } from '../../../models/resume/resume.model';

@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.scss']
})
export class ResumeItemComponent {
  @Input() @Required('app-resume-item') item?: IResume;
}
