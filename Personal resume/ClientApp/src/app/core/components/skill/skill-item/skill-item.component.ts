import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from 'src/app/core/models/skill/skill.model';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input() item?: ISkill;

  constructor() { }

  ngOnInit(): void {
    if (this.item == null) {
      throw new Error('app-skill-item, [item] attribute is required');
    }
  }

}
