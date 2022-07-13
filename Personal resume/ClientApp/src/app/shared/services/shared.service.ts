import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';

@Injectable()
export class SharedService {
  business: {
    isHandset: () => boolean
  };

  constructor(private breakpointObserver: BreakpointObserver) {
    this.business = {
      isHandset: () => {
        let isHandset = false;

        this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map(result => result.matches), shareReplay())
        .subscribe(handset => isHandset = handset);

        return isHandset;
      }
    }
  }
}
