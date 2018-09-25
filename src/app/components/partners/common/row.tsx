import * as React from 'react';
import { Link } from 'react-router-dom';
import { Partner } from '../../../types/partner';

interface IProps {
  partner?: Partner;
}

const PartnerListRow: React.SFC<IProps> = (props: IProps) => {
  
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
