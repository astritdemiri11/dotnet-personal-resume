import { BehaviorSubject } from 'rxjs';

import { ThemeItem } from '../theme/theme.model';

export interface LayoutConfig {
  readonly theme$: BehaviorSubject<ThemeItem>;
}

export class Layout { }
