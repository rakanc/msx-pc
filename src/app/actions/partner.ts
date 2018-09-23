import * as constants from '../constants';
import { Partner } from '../types/partner';

export interface IAddPartner {
  type: constants.PARTNER_ADD;
  partner: Partner;
}

export interface IGetPartner {
  type: constants.PARTNER_GET;
}

export interface IRemovePartner {
  type: constants.PARTNER_REMOVE;
  id: string;
}

export interface IUpdatePartner {
  type: constants.PARTNER_UPDATE;
  partner: Partner;
}

export type IPartnerAction = IAddPartner | IGetPartner | IRemovePartner | IUpdatePartner;

export function addPartner(partner: Partner): IAddPartner {
  return {
    type: constants.PARTNER_ADD,
    // tslint:disable-next-line:object-literal-sort-keys
    partner
  }
}

export function removePartner(id: string): IRemovePartner {
  return {
    type: constants.PARTNER_REMOVE,
    // tslint:disable-next-line:object-literal-sort-keys
    id
  }
}


export function updatePartner(partner: Partner): IUpdatePartner {
  return {
    type: constants.PARTNER_UPDATE,
    // tslint:disable-next-line:object-literal-sort-keys
    partner
  }
}


export function getPartner(): IGetPartner {
  return {
    type: constants.PARTNER_GET
  }
}

