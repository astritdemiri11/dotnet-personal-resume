import { IContact } from '../contact/contact.model';
import { IResume } from '../resume/resume.model';
import { ISocialMedia } from '../social-media/social-media.model';

export interface IMe {
  bio: string;
  birthday?: string;
  contact?: IContact;
  education?: IResume;
  experience?: IResume;
  languages?: string[];
  media?: ISocialMedia[];
  name: string;
  profession: string;
  surname: string;
}

export class Me {
}
