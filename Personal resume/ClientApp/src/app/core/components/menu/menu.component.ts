import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService) { }

  isHandset() {
    return this.sharedService.business.isHandset();
  }

  isActive(menuFragment: string) {
    let active = false;

    this.route.fragment.subscribe(fragment => {
      active = menuFragment === fragment
    })

    return active;
  }
}
