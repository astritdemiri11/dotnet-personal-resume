import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { IResume } from '../../models/resume/resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  experience: IResume;
  education: IResume;

  constructor(private sharedService: SharedService) {
    this.experience = {
      title: 'Experience',
      icon: 'business_center',
      isMatIcon: true,
      details: [{
        title: 'Senior UX/UI Designer',
        startDate: 'Jan 2020',
        endDate: 'Present',
        subtitle: 'Bergnaum, Hills and Howe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }, {
        title: 'Product Designer',
        startDate: 'Jan 2016',
        endDate: 'December 2019',
        subtitle: 'Langosh, Sipes and Raynor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }, {
        title: 'UI/UX Designer',
        startDate: 'Jan 2014',
        endDate: 'December 2015',
        subtitle: 'Strosin, Maggio and Homenick',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }]
    }

    this.education = {
      title: 'Education',
      icon: 'school',
      isMatIcon: true,
      details: [{
        title: 'Master of Computer Science',
        startDate: '2015',
        endDate: '2016',
        subtitle: 'University of XYZ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }, {
        title: 'Bachelor of Computer Science',
        startDate: '2010',
        endDate: '2014',
        subtitle: 'University of ABC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }, {
        title: 'Diploma in Computer Science',
        startDate: '2006',
        endDate: '2010',
        subtitle: 'XYZ Institution',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.'
      }]
    }
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
