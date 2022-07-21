import { Component } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { SharedService } from 'src/app/shared/services/shared.service';

import { BlogItem } from '../../models/blog/blog-item.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogs: BlogItem[];
  slickConfig: Slick.Config;

  constructor(private sharedService: SharedService) {
    this.blogs = [
      { creator: 'Admin', date: '27-09-2020', image: './assets/images/jpg/blog/blog1.jpg', description: 'What are the latest trends in Graphic design according to you?' },
      { creator: 'Admin', date: '27-09-2020', image: './assets/images/jpg/blog/blog2.jpg', description: 'What do you think makes someone a good designer?' },
      { creator: 'Admin', date: '27-09-2020', image: './assets/images/jpg/blog/blog3.jpg', description: 'Were there any mistakes you’ve made as a designer' },
      { creator: 'Admin', date: '27-09-2020', image: './assets/images/jpg/blog/blog2.jpg', description: 'What do you think makes someone a good designer?' },
      { creator: 'Admin', date: '27-09-2020', image: './assets/images/jpg/blog/blog3.jpg', description: 'Were there any mistakes you’ve made as a designer' },
    ];

    this.slickConfig = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
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
