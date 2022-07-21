import { Component, Input } from '@angular/core';

import { Required } from '../../decorators/required/required.decorator';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() @Required('app-section-header') label?: string;
}
