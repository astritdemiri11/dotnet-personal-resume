import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';

const materialModules = [
  HttpClientModule,
  FlexLayoutModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})

export class MaterialModule {
  constructor(
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconSetInNamespace('other',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/images/svg/other.svg'));

    iconRegistry.addSvgIconSetInNamespace('social-media',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/images/svg/social-media.svg'));
  }
}
