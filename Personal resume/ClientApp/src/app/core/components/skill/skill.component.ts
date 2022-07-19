import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

import { SkillItem } from '../../models/skill-item/skill-item.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  skills: SkillItem[];

  constructor(private sharedService: SharedService) {
    this.skills = [
      { label: 'Photoshop', percentage: 95 },
      { label: 'Motion Graphic', percentage: 75 },
      { label: 'Adobe XD', percentage: 90 },
      { label: 'UX Design', percentage: 85 },
      { label: 'HTML', percentage: 80 },
      { label: 'Digital Marketing', percentage: 90 }
    ]
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
