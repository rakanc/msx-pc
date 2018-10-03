import { IPartnerAction } from "../actions/partner";
import { PARTNER_ADD, PARTNER_GET, PARTNER_REMOVE, PARTNER_UPDATE } from "../constants";
import { Partner } from "../types/partner";
import { GuidGen } from "../utils/guidgen";
import initialState from "./initialState";

const partnerReducer = (state: Partner[] = initialState.partners, action: IPartnerAction) => {

  switch (action.type) {
    case PARTNER_ADD: {
      action.partner.id = GuidGen.New();
      return [
        ...state,
        Object.assign({}, action.partner)
      ];
    }
    case PARTNER_GET:
      return [...state];

    case PARTNER_REMOVE:
      return [
        ...state.filter(p => p.id !== action.id)
      ];

    case PARTNER_UPDATE:
      return [
        ...state.filter(p => p.id !== action.partner.id)
        , Object.assign({}, action.partner)
      ];

    default:
      return state;
  };

}

export default partnerReducer;
