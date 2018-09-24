import * as React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../../containers/partners';
import { Partner } from '../../../types/partner';
import PartnerList from '../common/list';

export interface IProps {
  partners: Partner[];
  history?: any;
}


// tslint:disable-next-line:no-empty-interface
export interface IState { }

export class Partners extends React.Component<IProps, IState> {

  constructor(props: IProps, state: IState) {
    super(props, state);
    this.redirectToAddPartner = this.redirectToAddPartner.bind(this);
  }

  public redirectToAddPartner() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.props.history!.push('/partners/add');
  }
  public render() {
    const { partners } = this.props;

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


export default connect(mapStateToProps, mapDispatchToProps)(Partners);
