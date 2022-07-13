import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
  constructor(private sharedService: SharedService) { }

  getSidenavRole() {
    return this.sharedService.business.isHandset() ? 'dialog' : 'navigation';
  }

  getSidenavMode(): MatDrawerMode {
    return this.sharedService.business.isHandset() ? 'over' : 'side';
  }

  isSidenavOpened() {
    // return !this.sharedService.business.isHandset();
    return false;
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
