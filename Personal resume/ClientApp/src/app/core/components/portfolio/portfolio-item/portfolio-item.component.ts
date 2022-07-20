import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PortfolioItem } from 'src/app/core/models/portfolio-item/portfolio-item.model';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit, AfterViewInit {
  @Input() item?: PortfolioItem;

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

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-service-item, [item] attribute is required');
    }
  }

  ngAfterViewInit() {
    if (this.portfolioContainer) {
      const portfolioContainer = this.portfolioContainer.nativeElement;
      this.renderer2.setStyle(portfolioContainer, 'height', (portfolioContainer.offsetWidth * 80 / 100) + 'px');
    }
  }
}
