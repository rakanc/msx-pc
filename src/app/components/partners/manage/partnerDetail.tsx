import * as React from 'react';
import TextInput from '../../../common/input/input';
import SelectInput from '../../../common/select/select';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Country } from '../../../types/country';
import { Partner } from '../../../types/partner';

// tslint:disable-next-line:no-empty-interface
export interface PartnerDetailProps {
  partner: Partner;
  countries: Country[];
  history?: any;
  errors: any;
  onUpdate?: (event: any) => void;
  onAdd?: (event: any) => void;
}

export interface PartnerDetailState {
  partner: Partner;
}
class PartnerDetail extends React.Component<PartnerDetailProps & IButtonProps, PartnerDetailState> {

  constructor(props: PartnerDetailProps, state: PartnerDetailState) {
    super(props, state);



    this.state = {
      partner: Object.assign({}, props.partner)
    };

    this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onUpdateCountry = this.onUpdateCountry.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  public onUpdate(event: any) {
    const field = event.target.name;
    const partner = Object.assign({}, this.state.partner);
    partner[field] = event.target.value;
    return this.setState({ partner });
  }

  public onUpdateCountry(event: any) {
    const field = event.target.name;
    const country = this.props.countries.find(c => c.id === event.target.value);
    const partner = Object.assign({}, this.state.partner);
    partner[field] = country;
    return this.setState({ partner });
  }

  public redirect() {
    this.props.history.push('/partners');
  }

  public onSave(event: any) {
    event.preventDefault();

    if (!this.state.partner!.id) {
      if (this.props.onAdd) {
        this.props.onAdd(this.state.partner);
      }
    } else {
      if (this.props.onUpdate) {
        this.props.onUpdate(this.state.partner);
      }
    }
    this.redirect();
  }


  public render() {

    const partner = this.state.partner;
    return (
      <form>
        <h2>Manage Partner</h2>
        <TextInput
          name="name"
          label="Name"
          value={partner!.name}
          onChange={this.onUpdate} />

        <SelectInput
          name="country"
          label="Country"
          value={partner!.country.id}
          defaultOption="Select a Country"
          options={this.props.countries}
          onChange={this.onUpdateCountry} />

        <TextInput
          name="address"
          label="Address"
          value={partner!.address}
          onChange={this.onUpdate} />

        <DefaultButton
          primary={true}
          disabled={false}
          data-automation-id="save"
          text="Save"
          onClick={this.onSave}
          allowDisabledFocus={true}
        />
      </form>
    );
  }
}


export default PartnerDetail;
