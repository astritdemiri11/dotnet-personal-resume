export interface ResumeDetailItem {
  description: string;
  endDate: string;
  startDate: string;
  subtitle: string;
  title: string;
}

export interface ResumeItem {
  details: ResumeDetailItem[];
  icon: string;
  isMatIcon: boolean;
  title: string;
}

export class ResumeItem {
}
