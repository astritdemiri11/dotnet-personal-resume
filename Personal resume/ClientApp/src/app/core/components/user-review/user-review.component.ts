import { Component } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { SharedService } from 'src/app/shared/services/shared.service';

import { UserReviewItem } from '../../models/user-review-item/user-review-item.model';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})
export class UserReviewComponent {
  reviews: UserReviewItem[];
  slickConfig: Slick.Config;

  constructor(private sharedService: SharedService) {
    this.reviews = [
      { label: 'Richard Miles', subheader: 'Chairman', image: './assets/images/png/user-review/user-review1.png', description: 'Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem do eiusmod.' },
      { label: 'Vesta Shufelt', subheader: 'Executive Director', image: './assets/images/png/user-review/user-review2.png', description: 'Lorem ipsum dolor sittem ametamngcing elit.' },
      { label: 'Joseph Alves', subheader: 'Managing Director', image: './assets/images/png/user-review/user-review3.png', description: 'Lorem ipsum.' },
      { label: 'Vesta Shufelt', subheader: 'Executive Director', image: './assets/images/png/user-review/user-review2.png', description: 'Lorem ipsum dolor sittem ametamngcing elit.' },
      { label: 'Joseph Alves', subheader: 'Managing Director', image: './assets/images/png/user-review/user-review3.png', description: 'Lorem ipsum.' }
    ];

    this.slickConfig = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000
    };
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
