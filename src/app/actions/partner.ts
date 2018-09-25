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


