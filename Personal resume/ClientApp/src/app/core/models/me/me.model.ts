import { KeyValueItem } from "src/app/shared/models/keyValue/key-value.model";

export interface Me {
  name: string;
  surname: string;
  profession: string;
  description: string;
  personal: KeyValueItem[]
}

export class Me {
}
