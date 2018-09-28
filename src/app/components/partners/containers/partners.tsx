import { connect } from 'react-redux';
import { IStoreState } from '../../../types';
import Partners from '../manage/partners';

export function mapStateToProps(state : IStoreState) {

  return {
    partners: state.partners
  }
}

export default connect(mapStateToProps)(Partners);
