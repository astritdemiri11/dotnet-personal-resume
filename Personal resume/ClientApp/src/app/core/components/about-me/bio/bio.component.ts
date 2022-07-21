import { Component, Input } from '@angular/core';
import { IMe } from 'src/app/core/models/me/me.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  @Input() me?: IMe;

  constructor() { }

  ngOnInit() {
    if (this.me == null) {
      throw new Error('app-bio, [me] attribute is required');
    }
  }
}
