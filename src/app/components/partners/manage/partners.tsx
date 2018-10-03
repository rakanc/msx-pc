import * as React from 'react';
import { Partner } from '../../../types/partner';
import { Logger } from '../../../utils/logger';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import './partner.css';


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


    return (
      <div>
        <h2>Partners</h2>
        <DefaultButton
          primary={true}
          className="saveBtn"
          name="AddPartner"
          disabled={false}
          data-automation-id="save"
          text="Add"
          onClick={this.redirectToAddPartner}
          allowDisabledFocus={true}
        />
      </div>
    );
  }
}


export default Partners;
