import { Component, Input, OnInit } from '@angular/core';
import { SkillItem } from 'src/app/core/models/skill/skill-item.model';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input() item?: SkillItem;

  constructor() { }

  ngOnInit(): void {
    if (this.item == null) {
      throw new Error('app-skill-item, [item] attribute is required');
    }
  }

}
