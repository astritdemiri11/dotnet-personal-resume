import { Component, Input, OnInit } from '@angular/core';
import { IResume } from 'src/app/core/models/resume/resume.model';

@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.scss']
})
export class ResumeItemComponent implements OnInit {
  @Input() item?: IResume;

  constructor() { }

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-resume-item, [item] attribute is required');
    }
  }
}
