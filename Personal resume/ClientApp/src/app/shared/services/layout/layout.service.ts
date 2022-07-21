import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

import { LayoutConfig, LayoutEvents } from '../../models/layout/layout.model';
import { ThemeItem } from '../../models/theme/theme.model';

@Injectable()
export class LayoutService {
  private configs: LayoutConfig;

  constructor() {
    this.configs = {
      theme$: new BehaviorSubject<ThemeItem>(ThemeItem.Default),
      events: {
        windowResize$: fromEvent(window, 'resize')
      }
    };
  }

  getThemeSubject(): BehaviorSubject<ThemeItem> {
    return this.configs.theme$;
  }

  getEvents(): LayoutEvents {
    return this.configs.events;
  }

  setTheme(theme: ThemeItem) {
    this.configs.theme$.next(theme);
  }
}
