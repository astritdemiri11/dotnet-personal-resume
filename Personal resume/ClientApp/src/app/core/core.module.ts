import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgParticlesModule } from 'ng-particles';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WaterRippleComponent } from './components/intro/water-ripple/water-ripple.component';
import { ParticlesComponent } from './components/intro/particles/particles.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    MenuComponent,
    IntroComponent,
    WaterRippleComponent,
    ParticlesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgParticlesModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
