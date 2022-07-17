import { KeyValueItem } from "src/app/shared/models/keyValue/key-value.model";

export interface BioItem {
  name: string;
  surname: string;
  profession: string;
  description: string;
  personal: KeyValueItem[]
}

export class Bio {
}
