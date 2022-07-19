import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ResumeItem } from '../../models/resume-item/resume-item.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  experience: ResumeItem;
  education: ResumeItem;

  constructor(private sharedService: SharedService) {
    this.experience = {
      label: 'Experience',
      logo: 'business_center',
      isMatLogo: true,
      details: [{
        label: 'Senior UX/UI Designer',
        startDate: 'Jan 2020',
        endDate: 'Present',
        subheader: 'Bergnaum, Hills and Howe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }, {
        label: 'Product Designer',
        startDate: 'Jan 2016',
        endDate: 'December 2019',
        subheader: 'Langosh, Sipes and Raynor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }, {
        label: 'UI/UX Designer',
        startDate: 'Jan 2014',
        endDate: 'December 2015',
        subheader: 'Strosin, Maggio and Homenick',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }]
    }

    this.education = {
      label: 'Education',
      logo: 'school',
      isMatLogo: true,
      details: [{
        label: 'Master of Computer Science',
        startDate: '2015',
        endDate: '2016',
        subheader: 'University of XYZ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }, {
        label: 'Bachelor of Computer Science',
        startDate: '2010',
        endDate: '2014',
        subheader: 'University of ABC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }, {
        label: 'Diploma in Computer Science',
        startDate: '2006',
        endDate: '2010',
        subheader: 'XYZ Institution',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }]
    }
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
