import * as React from 'react';
import TextInput from '../../../common/input/input';
import SelectInput from '../../../common/select/select';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Country } from '../../../types/country';
import { Partner } from '../../../types/partner';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

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
  showModal: boolean;
}
class PartnerDetail extends React.Component<PartnerDetailProps & IButtonProps, PartnerDetailState> {

  constructor(props: PartnerDetailProps, state: PartnerDetailState) {
    super(props, state);



    this.state = {
      partner: Object.assign({}, props.partner),
      showModal: true
    };

    this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onUpdateCountry = this.onUpdateCountry.bind(this);
    this.redirect = this.redirect.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  public onUpdate(event: any) {
    const field = event.target.name;
    const partner = Object.assign({}, this.state.partner);
    partner[field] = event.target.value;
    return this.setState({ partner });
  }

  public onUpdateCountry(item: IDropdownOption) {
    console.log('here is the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
    const partner = Object.assign({}, this.state.partner);
    partner.country = item as Country;
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
  public showModal(): void {
    this.setState({ showModal: true });
  };
  public closeModal(): void {
    this.setState({ showModal: false });
  };

  public render() {

    const partner = this.state.partner;
    return (
      <Modal
        isOpen={this.state.showModal}
        onDismiss={this.closeModal}
        isBlocking={false}
        containerClassName="ms-modalExample-container"
      >
        <h2>Manage Partner</h2>
        <TextInput
          name="name"
          label="Name"
          value={partner!.name}
          onChange={this.onUpdate} />

        <SelectInput
          name="country"
          label="Country"
          value={partner!.country.key}
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
      </Modal>
    );
  }
}


export default PartnerDetail;
