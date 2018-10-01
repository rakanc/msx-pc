
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

export class Country implements IDropdownOption {
  constructor(public key = '', public text = '') { }
}

