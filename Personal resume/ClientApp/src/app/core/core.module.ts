import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class CoreModule { }
