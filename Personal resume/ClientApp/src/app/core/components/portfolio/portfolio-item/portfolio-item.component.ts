import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItem } from 'src/app/core/models/portfolio-item/portfolio-item.model';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() item?: PortfolioItem;

  constructor() { }

  onMouseOver() {
  }

  onMouseLeave() {
  }

  ngOnInit() {
    if (this.item == null) {
      throw new Error('app-service-item, [item] attribute is required');
    }
  }
}
