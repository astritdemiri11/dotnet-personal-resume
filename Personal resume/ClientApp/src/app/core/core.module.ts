import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import { NgParticlesModule } from 'ng-particles';
import { NgxSlickJsModule } from 'ngx-slickjs';

import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BioComponent } from './components/about-me/bio/bio.component';
import { BlogItemComponent } from './components/blog/blog-item/blog-item.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactFormComponent } from './components/contact-me/contact-form/contact-form.component';
import { ContactItemComponent } from './components/contact-me/contact-item/contact-item.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { InfoComponent } from './components/intro/info/info.component';
import { IntroComponent } from './components/intro/intro.component';
import { ParticlesComponent } from './components/intro/particles/particles.component';
import { SocialMediaItemComponent } from './components/intro/social-media/social-media-item/social-media-item.component';
import { SocialMediaComponent } from './components/intro/social-media/social-media.component';
import { WaterRippleComponent } from './components/intro/water-ripple/water-ripple.component';
import { PortfolioItemComponent } from './components/portfolio/portfolio-item/portfolio-item.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeDetailItemComponent } from './components/resume/resume-item/resume-detail-item/resume-detail-item.component';
import { ResumeItemComponent } from './components/resume/resume-item/resume-item.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { ServiceItemComponent } from './components/service-type/service-item/service-item.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { SkillItemComponent } from './components/skill/skill-item/skill-item.component';
import { SkillComponent } from './components/skill/skill.component';
import { UserReviewItemComponent } from './components/user-review/user-review-item/user-review-item.component';
import { UserReviewComponent } from './components/user-review/user-review.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    BioComponent,
    BlogComponent,
    BlogItemComponent,
    ContactFormComponent,
    ContactItemComponent,
    ContactMeComponent,
    HeaderComponent,
    InfoComponent,
    IntroComponent,
    MenuComponent,
    ParticlesComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    ResumeComponent,
    ResumeDetailItemComponent,
    ResumeItemComponent,
    SectionHeaderComponent,
    ServiceItemComponent,
    ServiceTypeComponent,
    SkillComponent,
    SkillItemComponent,
    SocialMediaComponent,
    SocialMediaItemComponent,
    UserReviewComponent,
    UserReviewItemComponent,
    WaterRippleComponent
  ],
  imports: [
    CommonModule,
    LightgalleryModule,
    LayoutModule,
    NgParticlesModule,
    NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      }
  }),
  SharedModule
  ],
  exports: [
    AboutMeComponent,
    BlogComponent,
    ContactMeComponent,
    HeaderComponent,
    IntroComponent,
    MenuComponent,
    PortfolioComponent,
    ResumeComponent,
    ServiceTypeComponent,
    SkillComponent,
    UserReviewComponent
  ]
})
export class CoreModule { }
