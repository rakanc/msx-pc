import axios from 'axios';
import * as constants from '../constants';

export interface ICountries {
  type: constants.COUNTRIES_GET;
}

export interface ICountriesOk {
  type: constants.COUNTRIES_OK;
  payload: any;
}

export interface ICountriesNOk {
  type: constants.COUNTRIES_NOK;
  payload: any;
}

export function countries(): ICountries {
  return {
    type: constants.COUNTRIES_GET
  }
}


export function countriesOk(res: any): ICountriesOk {
  return {
    type: constants.COUNTRIES_OK,
    payload: res
  }
}


export function countriesNOk(ex: any): ICountriesNOk {
  return {
    type: constants.COUNTRIES_NOK,
    payload: ex
  }
}
export type ICountriesAction = ICountries | ICountriesOk | ICountriesNOk;

export function LoadCountries() {
  
  const url = 'http://localhost:3001/countries'
  return (dispatch: any) => {
    dispatch(countries());
    return axios.get(url).then((res) => {
      dispatch(countriesOk(res.data));
    }).catch((ex) => {
      dispatch(countriesNOk(ex));
    });
  }
}
