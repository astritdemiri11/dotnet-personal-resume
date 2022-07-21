import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Required } from 'src/app/core/decorators/required/required.decorator';
import { IPortfolio } from 'src/app/core/models/portfolio/portfolio.model';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements AfterViewInit {
  @Input() @Required('app-portfolio-item') item?: IPortfolio;

  @ViewChild('portfolioContainer', { static: false }) portfolioContainer?: ElementRef<HTMLDivElement>;
  constructor(private renderer2: Renderer2, private layoutService: LayoutService) {
    const layoutEvents = this.layoutService.getEvents();

    layoutEvents.windowResize$.subscribe(() => {
      if (this.portfolioContainer) {
        const portfolioContainer = this.portfolioContainer.nativeElement;
        this.renderer2.setStyle(portfolioContainer, 'height', (portfolioContainer.offsetWidth * 80 / 100) + 'px');
      }
    });
  }

  ngAfterViewInit() {
    if (this.portfolioContainer) {
      const portfolioContainer = this.portfolioContainer.nativeElement;
      this.renderer2.setStyle(portfolioContainer, 'height', (portfolioContainer.offsetWidth * 80 / 100) + 'px');
    }
  }
}
