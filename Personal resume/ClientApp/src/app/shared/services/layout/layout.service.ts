import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LayoutConfig } from '../../models/layout/layout.model';
import { ThemeItem } from '../../models/theme/theme.model';

@Injectable()
export class LayoutService {
  private configs: LayoutConfig;

  constructor() {
    this.configs = {
      theme$: new BehaviorSubject<ThemeItem>(ThemeItem.IndigoGreen)
    };
  }

  getThemeSubject(): BehaviorSubject<ThemeItem> {
    return this.configs.theme$;
  }

  setTheme(theme: ThemeItem) {
    this.configs.theme$.next(theme);
  }
}
