import React, {PropTypes} from 'react';
import ReactCollapsingTable from 'react-collapsing-table'

export class DetailsList extends React.Component {
 
  componentWillMount(){
    // window.addEventListener('resize', throttle(this.resizeTable, 150));
     console.log('Mounting');
}
componentWillUnmount() {
  // window.removeEventListener('resize', this.resizeTable);
  console.log('UnMounting');
}
  render() {
    return (
      <ReactCollapsingTable rows={this.props.rows} columns={this.props.columns} />
    );
  }
}

export default DetailsList;
