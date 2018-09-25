import * as React from 'react';
import { Partner } from '../../../types/partner';
import PartnerList from '../common/list';

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
    // tslint:disable-next-line:no-debugger
    debugger;
    return (
      <div>
        <h1>Partners</h1>
        <input type="submit"
          name="AddPartner"
          value="Add Partner"
          className="btn btn-primary"
          onClick={this.redirectToAddPartner} />
        <PartnerList partners={partners} />
      </div>
    );
  }
}


export default Partners;
