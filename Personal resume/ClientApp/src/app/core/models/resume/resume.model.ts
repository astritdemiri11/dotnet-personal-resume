export interface IResumeDetail {
  description: string;
  endDate: string;
  startDate: string;
  subtitle: string;
  title: string;
}

export interface IResume {
  details: IResumeDetail[];
  icon: string;
  isMatIcon: boolean;
  title: string;
}

export class Resume {

}
