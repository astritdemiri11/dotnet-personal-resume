import { Component, Input } from '@angular/core';
import { Required } from 'src/app/core/decorators/required/required.decorator';
import { ISkill } from 'src/app/core/models/skill/skill.model';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {
  @Input() @Required('app-skill-item') item?: ISkill;
}
