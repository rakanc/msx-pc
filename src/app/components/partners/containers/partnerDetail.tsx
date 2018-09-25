import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAddPartner, IGetPartner,
  IPartnerAction, IRemovePartner, IUpdatePartner } from '../../../actions/partner';
import * as constants from '../../../constants';
import { Partner } from '../../../types/partner';
import PartnerDetail from '../manage/partnerDetail';


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


const getPartnerById = (partners: Partner[], id: string) => {
  const ps = partners.filter((p: Partner) => p.id === id);
  if (ps.length) { return ps[0]; }
  return null;
};

export function mapStateToProps(state: any, ownProps: any) {

  const pid = ownProps.match.params.id;
  let partner = null;
  if (pid && state.partners.length > 0) {
    partner = getPartnerById(state.partners, pid);
  }

  if (partner === null) {
    partner = new Partner();
  }
  return {
    countries: state.countries,
    partner
  }
}

export function mapDispatchToProps(dispatch: Dispatch<IPartnerAction>) {
  return {
    onAdd: (partner: Partner) => dispatch(addPartner(partner)),
    onGet: () => dispatch(getPartner()),
    onRemove: (id: string) => dispatch(removePartner(id)),
    onUpdate: (partner: Partner) => dispatch(updatePartner(partner))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDetail);

