import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

import { SkillItem } from '../../models/skill/skill-item.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  skills: SkillItem[];

  constructor(private sharedService: SharedService) {
    this.skills = [
      { title: 'Photoshop', percentage: 95 },
      { title: 'Motion Graphic', percentage: 75 },
      { title: 'Adobe XD', percentage: 90 },
      { title: 'UX Design', percentage: 85 },
      { title: 'HTML', percentage: 80 },
      { title: 'Digital Marketing', percentage: 90 }
    ]
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
