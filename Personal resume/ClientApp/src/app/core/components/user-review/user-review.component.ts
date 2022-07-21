import { Component } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { SharedService } from 'src/app/shared/services/shared.service';

import { IUserReview } from '../../models/user-review/user-review.model';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})
export class UserReviewComponent {
  reviews: IUserReview[];
  slickConfig: Slick.Config;

  constructor(private sharedService: SharedService) {
    this.reviews = [
      { fullName: 'Richard Miles', profession: 'Chairman', image: './assets/images/png/user-review/user-review1.png', description: 'Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem do eiusmod.' },
      { fullName: 'Vesta Shufelt', profession: 'Executive Director', image: './assets/images/png/user-review/user-review2.png', description: 'Lorem ipsum dolor sittem ametamngcing elit.' },
      { fullName: 'Joseph Alves', profession: 'Managing Director', image: './assets/images/png/user-review/user-review3.png', description: 'Lorem ipsum.' },
      { fullName: 'Vesta Shufelt', profession: 'Executive Director', image: './assets/images/png/user-review/user-review2.png', description: 'Lorem ipsum dolor sittem ametamngcing elit.' },
      { fullName: 'Joseph Alves', profession: 'Managing Director', image: './assets/images/png/user-review/user-review3.png', description: 'Lorem ipsum.' }
    ];

    this.slickConfig = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3
    };
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
