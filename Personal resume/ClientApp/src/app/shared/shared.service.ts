import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  model: { isHandset$: Observable<boolean> };

  constructor(private breakpointObserver: BreakpointObserver) {
    this.model = {
      isHandset$: new Observable<boolean>()
    }

    this.model.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches), shareReplay());
   }
}
