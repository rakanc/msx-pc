import { connect } from 'react-redux';
import { Partner } from '../../../types/partner';
import PartnerDetail from '../manage/partnerDetail';



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


export default connect(mapStateToProps)(PartnerDetail);


// export function mapDispatchToProps(dispatch: Dispatch<actions.IPartnerAction>) {
//   return {
//     onAdd: (partner: Partner) => dispatch(actions.addPartner(partner)),
//     onGet: () => dispatch(actions.getPartner()),
//     onRemove: (id: string) => dispatch(actions.removePartner(id)),
//     onUpdate: (partner: Partner) => dispatch(actions.updatePartner(partner))
//   }
// }
