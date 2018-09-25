import * as React from 'react';
import { Partner } from '../../../types/partner';
import { Logger } from '../../../utils/logger';
import PartnerList from '../common/list';
import './partner.css';
export interface IProps {
  partners: Partner[];
  history?: any;
  match?: any;
}


// tslint:disable-next-line:no-empty-interface
export interface IState { }

class Partners extends React.Component<IProps, IState> {

  constructor(props: IProps, state: IState) {
    super(props, state);
    this.redirectToAddPartner = this.redirectToAddPartner.bind(this);
  }

  public redirectToAddPartner() {

    this.props.history!.push('/partners/add');
  }
  public render() {
    const { partners } = this.props;
    const { match } = this.props
    console.log('Path: ' + match.path);
    console.log('Url: ' + match.url);
    Logger.logEvent('TESTINGREACT');
    // tslint:disable-next-line:no-debugger
    debugger;
    return (
      <div>
        <h1>Partners</h1>
        <input type="submit"
          name="AddPartner"
          value="Add"
          className="btn btn-primary btn-sm"
          onClick={this.redirectToAddPartner} />
        <PartnerList partners={partners} />
      </div>
    );
  }
}


export default Partners;
