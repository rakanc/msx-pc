import * as React from 'react';
import { Link } from 'react-router-dom';
import { Partner } from '../../../types/partner';

interface IProps {
    partner?: Partner;
}

const PartnerListRow: React.SFC<IProps> = (props: IProps) => (
    <tr>
        <td><Link to={'partner/' + props.partner!.id}>{props.partner!.name}</Link></td>
        <td>{props.partner!.address}</td>
    </tr>
)

PartnerListRow.defaultProps = {
    partner: new Partner()
};

export default PartnerListRow;
