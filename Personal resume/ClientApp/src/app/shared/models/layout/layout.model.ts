import { BehaviorSubject, Observable } from 'rxjs';

import { ThemeItem } from '../theme/theme.model';

export interface LayoutEvents {
  windowResize$: Observable<Event>
}

export interface LayoutConfig {
  theme$: BehaviorSubject<ThemeItem>;
  events: LayoutEvents
}

export class Layout { }
