import * as React from 'react';
import { Partner } from '../../../types/partner';
import PartnerListRow from './row';

interface PartnerListProps {
    partners?: Partner[];
}

const PartnerList: React.SFC<PartnerListProps> = (props: PartnerListProps) => (
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {props.partners!.map(partner =>
                <PartnerListRow key={partner.id} partner={partner} />)
            }
        </tbody>
    </table>
)

PartnerList.defaultProps = {
  partners : new Array<Partner>()
}

export default PartnerList;
