import * as React from 'react';
import TextInput from '../../../common/input/input';
import SelectInput from '../../../common/select/select';
import { Partner } from '../../../model/types/partner';

// tslint:disable-next-line:no-empty-interface
export interface IProps {
  partner: Partner;
  allCountries: string[];
  errors: any;
  onChange(): void;
  onSave(): void;
}

// tslint:disable-next-line:no-empty-interface
export interface IState { }

class PartnerDetail extends React.Component<IProps, IState> {

  constructor(props: IProps, state: IState) {
    super(props, state);
  }

  public render() {
    const partner = this.props.partner;
    return (
      <form>
        <h1>Manage Partner</h1>
        <TextInput
          name="Name"
          label="Name"
          value={partner.name}
          onChange={this.props.onChange}
          error={this.props.errors.title} />

        <SelectInput
          name="countryId"
          label="Country"
          value={partner.country}
          defaultOption="Select Country"
          options={this.props.allCountries}
          onChange={this.props.onChange} error={this.props.errors.countryId} />

        <TextInput
          name="Address"
          label="Address"
          value={partner.address}
          onChange={this.props.onChange}
          error={this.props.errors.title} />

        <input
          type="submit"
          disabled= {false}
          value= 'Save'
          className="btn btn-primary"
          onClick={this.props.onSave} />
      </form>
    );
  }
}


export default PartnerDetail;
