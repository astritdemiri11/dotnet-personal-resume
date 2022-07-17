import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ThemeItem } from './shared/models/theme/theme.model';
import { LayoutService } from './shared/services/layout/layout.service';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @HostBinding('class') componentCssClass?: string;
  theme$: BehaviorSubject<ThemeItem>;

  private subscriptions: Subscription[];

  constructor(
    private titleService: Title,
    private overlayContainer: OverlayContainer,
    private layoutService: LayoutService,
    private sharedService: SharedService) {
    this.titleService.setTitle(environment.title);

    this.subscriptions = [];
    this.theme$ = this.layoutService.getThemeSubject();

    this.subscriptions.push(this.theme$.subscribe((themeType: ThemeItem) => {
      if(themeType) {
        this.overlayContainer.getContainerElement().classList.add(themeType);
      }

      this.componentCssClass = themeType;
    }));
   }

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

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
