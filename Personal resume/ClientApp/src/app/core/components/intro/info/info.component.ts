import { Component, Input } from '@angular/core';
import { Me } from 'src/app/core/models/me/me.model';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() me?: Me;

  constructor(private sharedService: SharedService) { }

  isHandset() {
    return this.sharedService.business.isHandset();
  }

  ngOnInit() {
    if (this.me == null) {
      throw new Error('app-info, [me] attribute is required');
    }
  }
}
