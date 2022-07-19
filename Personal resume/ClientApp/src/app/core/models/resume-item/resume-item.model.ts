export interface ResumeDetailItem {
  label: string;
  startDate: string;
  endDate: string;
  subheader: string;
  description: string;
}

export interface ResumeItem {
  label: string;
  logo: string;
  isMatLogo: boolean;
  details: ResumeDetailItem[];
}

export class ResumeItem {
}
