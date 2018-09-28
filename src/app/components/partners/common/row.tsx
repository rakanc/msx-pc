import * as React from 'react';
import { Link } from 'react-router-dom';
import { Partner } from '../../../types/partner';

interface PartnerListRowProps {
  partner?: Partner;
}

const PartnerListRow: React.SFC<PartnerListRowProps> = (props: PartnerListRowProps) => {

  console.log(props.partner!.country.value);
  return (
    <tr>
      <td><Link to={'partners/edit/' + props.partner!.id}>{props.partner!.name}</Link></td>
      <td>{props.partner!.address}</td>
      <td>{props.partner!.country.value}</td>
    </tr>
  );
}

PartnerListRow.defaultProps = {
  partner: new Partner()
};

export default PartnerListRow;
