import { Country } from "./country";
import { Partner } from "./partner";

export interface IStoreState {
  partners: Partner[];
  countries: Country[];
}

