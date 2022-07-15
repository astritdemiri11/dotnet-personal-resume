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
import { AboutMeComponent } from './components/navigation/about-me/about-me.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { MenuComponent } from './components/navigation/header/menu/menu.component';
import { InfoComponent } from './components/navigation/intro/info/info.component';
import { IntroComponent } from './components/navigation/intro/intro.component';
import { ParticlesComponent } from './components/navigation/intro/particles/particles.component';
import { SocialMediaComponent } from './components/navigation/intro/social-media/social-media.component';
import { WaterRippleComponent } from './components/navigation/intro/water-ripple/water-ripple.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    MenuComponent,
    IntroComponent,
    WaterRippleComponent,
    ParticlesComponent,
    InfoComponent,
    SocialMediaComponent,
    AboutMeComponent,
    SectionHeaderComponent
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
