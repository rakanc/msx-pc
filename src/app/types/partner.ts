import { Country } from "./country";

export class Partner {
  constructor(public id = '', public address = '', public name = '', public country = new Country()) { }
}

