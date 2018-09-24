import * as React from 'react';
import TextInput from '../../../common/input/input';
import SelectInput from '../../../common/select/select';
import { Partner } from '../../../types/partner';

// tslint:disable-next-line:no-empty-interface
export interface IProps {
  partner: Partner;
  countries: any;
  history?: any;
  errors: any;
  updatePartner?: (event: any) => void;
  createPartner?: (event: any) => void;
}

export interface IState {
  partner: Partner;
}
class PartnerDetail extends React.Component<IProps, IState> {

  constructor(props: IProps, state: IState) {
    super(props, state);



    this.state = {
      partner: Object.assign({}, props.partner)
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  public onUpdate(event: any) {
    const field = event.target.name;
    const partner = Object.assign({}, this.state.partner);
    partner[field] = event.target.value;
    return this.setState({ partner });
  }

  public redirect() {
    this.props.history.push('/partners');
  }

  public onSave(event: any) {
    event.preventDefault();

    if (!this.state.partner!.id) {
      if (this.props.createPartner) {
        this.props.createPartner(this.state.partner);
      }
    } else {
      if (this.props.updatePartner) {
        this.props.updatePartner(this.state.partner);
      }
    }
    this.redirect();
  }


  public render() {
    // tslint:disable-next-line:no-debugger
    debugger;
    const partner = this.state.partner;
    return (
      <form>
        <h1>Manage Partner</h1>
        <TextInput
          name="Name"
          label="Name"
          value={partner!.name}
          onChange={this.onUpdate} />

        <SelectInput
          name="countryId"
          label="Country"
          value={partner!.country.name}
          defaultOption="Select Country"
          options={this.props.countries}
          onChange={this.onUpdate} />

        <TextInput
          name="Address"
          label="Address"
          value={partner!.address}
          onChange={this.onUpdate} />

        <input
          type="submit"
          disabled={false}
          value='Save'
          className="btn btn-primary"
          onClick={this.onSave} />
      </form>
    );
  }
}


export default PartnerDetail;
