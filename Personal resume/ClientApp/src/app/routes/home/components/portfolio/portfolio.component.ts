import { Component } from '@angular/core';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { SharedService } from 'src/app/shared/services/shared.service';

import { IPortfolio } from '../../models/portfolio/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolios: IPortfolio[];
  lightGallerySettings: LightGallerySettings;

  constructor(private sharedService: SharedService) {
    this.portfolios = [
      { title: 'Product Design', image: './assets/images/jpg/portfolio/portfolio1.jpg', subtitle: 'Design / Marketing' },
      { title: 'Product Design', image: './assets/images/jpg/portfolio/portfolio2.jpg', subtitle: 'Design / Marketing' },
      { title: 'Product Design', image: './assets/images/jpg/portfolio/portfolio3.jpg', subtitle: 'Design / Marketing' },
      { title: 'Product Design', image: './assets/images/jpg/portfolio/portfolio4.jpg', subtitle: 'Design / Marketing' },
      { title: 'Product Design', image: './assets/images/jpg/portfolio/portfolio5.jpg', subtitle: 'Design / Marketing' },
      { title: 'Product Design', image: './assets/images/jpg/portfolio/portfolio6.jpg', subtitle: 'Design / Marketing' }
    ];

    this.lightGallerySettings = {
      counter: false,
      plugins: [lgThumbnail, lgZoom]
    };
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
