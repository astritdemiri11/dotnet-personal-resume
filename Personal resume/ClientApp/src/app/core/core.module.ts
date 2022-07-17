import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';

import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BioComponent } from './components/about-me/bio/bio.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { InfoComponent } from './components/intro/info/info.component';
import { IntroComponent } from './components/intro/intro.component';
import { ParticlesComponent } from './components/intro/particles/particles.component';
import { SocialMediaComponent } from './components/intro/social-media/social-media.component';
import { WaterRippleComponent } from './components/intro/water-ripple/water-ripple.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { ServiceItemComponent } from './components/service-type/service-item/service-item.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    HeaderComponent,
    InfoComponent,
    IntroComponent,
    MenuComponent,
    ParticlesComponent,
    SectionHeaderComponent,
    ServiceTypeComponent,
    SocialMediaComponent,
    WaterRippleComponent,
    BioComponent,
    ServiceItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    NgParticlesModule
  ],
  exports: [
    AboutMeComponent,
    HeaderComponent,
    IntroComponent,
    MenuComponent,
    ServiceTypeComponent
  ]
})
export class CoreModule { }
