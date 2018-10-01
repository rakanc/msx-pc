import * as React from 'react';
import { Partner } from '../../../types/partner';
import { Logger } from '../../../utils/logger';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import './partner.css';
import DetailsList from '../common/detailslist';


export interface PartnersProps {
  partners: Partner[];
  history?: any;
  match?: any;
}


// tslint:disable-next-line:no-empty-interface
export interface PartnersState { }

class Partners extends React.Component<PartnersProps & IButtonProps, PartnersState> {

  constructor(props: PartnersProps, state: PartnersState) {
    super(props, state);
    this.redirectToAddPartner = this.redirectToAddPartner.bind(this);
  }

  public redirectToAddPartner() {

    this.props.history!.push('/partners/add');
  }
  public render() {
    // const { partners } = this.props;
    // const { match } = this.props
    // console.log('Path: ' + match.path);
    // console.log('Url: ' + match.url);
    Logger.logEvent('TESTINGREACT');
    const columns =  [
      { accessor: 'firstName', label: 'First Name', isVisible: true, minWidth: 100, priorityLevel: 3, position: 1, },
      { accessor: 'lastName', label: 'Last Name', isVisible: true, minWidth: 50, priorityLevel: 1, position: 2, },
      { accessor: 'email', label: 'Email', isVisible: false, minWidth: 90, priorityLevel: 3, position: 3, },
  ];
 const  rows = [
      { firstName: 'Paul', lastName: 'Darragh', isOpen: true },
      { firstName: 'Matt', lastName: 'Smith', isOpen: true },
      { firstName: 'Michelle', lastName: 'Piper', isOpen: true },
  ]

    return (
      <div>
        <h2>Partners</h2>
        <DefaultButton
          primary={true}
          name="AddPartner"
          disabled={false}
          data-automation-id="save"
          text="Add"
          onClick={this.redirectToAddPartner}
          allowDisabledFocus={true}
        />
        <div className="Dlist"><DetailsList rows={rows} columns={columns}/>
        </div>
      </div>
    );
  }
}


export default Partners;
