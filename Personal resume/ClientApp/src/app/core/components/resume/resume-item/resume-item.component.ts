import { Component, Input, OnInit } from '@angular/core';
import { ResumeItem } from 'src/app/core/models/resume/resume-item.model';

@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.scss']
})
export class ResumeItemComponent implements OnInit {
  @Input() item?: ResumeItem;

  constructor() { }

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-resume-item, [item] attribute is required');
    }
  }
}
