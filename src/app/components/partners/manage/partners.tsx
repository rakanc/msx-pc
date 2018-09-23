import * as React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../../containers/partners';
import { Partner } from '../../../types/partner';
import PartnerList from '../common/list';

export interface IProps {
  partners: Partner[];
  history: any;
}


// tslint:disable-next-line:no-empty-interface
export interface IState { }

class Partners extends React.Component<IProps, IState> {

  constructor(props: IProps, state: IState) {
    super(props, state);
  }

  public redirectToAddPartner() {
    this.props.history.push('/partner');
  }
  public render() {
    const { partners } = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddPartner} />
        <PartnerList partners={partners} />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Partners);
