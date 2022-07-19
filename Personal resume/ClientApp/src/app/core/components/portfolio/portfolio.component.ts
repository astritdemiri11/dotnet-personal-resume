import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

import { PortfolioItem } from '../../models/portfolio-item/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolios: PortfolioItem[];

  constructor(private sharedService: SharedService) {
    this.portfolios = [
      { label: 'Product Design', image: './assets/images/jpg/portfolio/portfolio1.jpg', subheader: 'Design / Marketing' },
      { label: 'Product Design', image: './assets/images/jpg/portfolio/portfolio2.jpg', subheader: 'Design / Marketing' },
      { label: 'Product Design', image: './assets/images/jpg/portfolio/portfolio3.jpg', subheader: 'Design / Marketing' },
      { label: 'Product Design', image: './assets/images/jpg/portfolio/portfolio4.jpg', subheader: 'Design / Marketing' },
      { label: 'Product Design', image: './assets/images/jpg/portfolio/portfolio5.jpg', subheader: 'Design / Marketing' },
      { label: 'Product Design', image: './assets/images/jpg/portfolio/portfolio6.jpg', subheader: 'Design / Marketing' }
    ]
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
