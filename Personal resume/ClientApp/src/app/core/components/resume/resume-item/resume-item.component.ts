import { Component, Input } from '@angular/core';
import { Required } from 'src/app/core/decorators/required/required.decorator';
import { IResume } from 'src/app/core/models/resume/resume.model';

@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.scss']
})
export class ResumeItemComponent {
  @Input() @Required('app-resume-item') item?: IResume;
}
