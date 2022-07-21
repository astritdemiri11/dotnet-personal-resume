import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';

import { RequiredProps } from '../../../decorators/required/required.decorator';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
@RequiredProps('app-contact-item', 'label', 'icon', 'values')
export class ContactItemComponent {
  @Input() label?: string;
  @Input() icon?: string;
  @Input() values?: string[];
  @Input()
  get matIcon() { return this.matIconInput; }
  set matIcon(value: any) { this.matIconInput = coerceBooleanProperty(value); }

  private matIconInput?: boolean;
  constructor() { }
}
