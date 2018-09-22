import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IProps { }

// tslint:disable-next-line:no-empty-interface
export interface IState { }

class PartnerDetail extends React.Component<IProps, IState> {

  constructor(props: IProps, state: IState) {
    super(props, state);
  }

  public render() {
    return (
      <form action="">
        Testing in Partner detail form
      </form>
    );
  }
}


export default PartnerDetail;
