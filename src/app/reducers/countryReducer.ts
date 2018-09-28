import { ICountriesAction } from "../actions/countries";
import { COUNTRIES_OK } from "../constants";
import { Country } from "../types/country";
import initialState from "./initialState";

const countryReducer = (state: Country[] = initialState.countries, action: ICountriesAction) => {
  switch (action.type) {

    case COUNTRIES_OK:
      return action.payload;
    default:
      return state;
  };

}

export default countryReducer;
