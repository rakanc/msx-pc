import { Dispatch } from 'redux';
import * as actions from '../actions/partner';
import { IStoreState } from '../types/index';
import { Partner } from '../types/partner';


export function mapStateToProps({ partners }: IStoreState) {
  return {
    partners
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IPartnerAction>) {
  return {
    onAdd: (partner: Partner) => dispatch(actions.addPartner(partner)),
    onGet: () => dispatch(actions.getPartner()),
    onRemove: (id: string) => dispatch(actions.removePartner(id)),
    onUpdate: (partner: Partner) => dispatch(actions.updatePartner(partner))
  }
}
