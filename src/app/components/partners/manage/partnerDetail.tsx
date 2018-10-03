import * as React from 'react';
import TextInput from '../../../common/input/input';
import SelectInput from '../../../common/select/select';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import './partner.css';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Country } from '../../../types/country';
import { Partner } from '../../../types/partner';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Label } from 'office-ui-fabric-react/lib/Label';

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
        isBlocking={true}
        containerClassName="modal-container"
      >
        <div className="modal-header">
          <Label>Manage Partner</Label>
        </div>
        <hr />
        <div>
          <fieldset>
            <legend>Customer Info</legend>
            <TextInput
              name="name"
              label="Name"
              cname="name"
              value={partner!.name}
              onChange={this.onUpdate} />
            <TextInput
              name="address"
              label="Address"
              cname="address"
              value={partner!.address}
              onChange={this.onUpdate} />
            <SelectInput
              name="country"
              label="Country"
              cname="Dropdown1"
              value={partner!.country.key}
              defaultOption="Select a Country"
              options={this.props.countries}
              onChange={this.onUpdateCountry} />
            <TextInput
              name="name"
              label="Name1"
              cname="name1"
              value={partner!.name}
              onChange={this.onUpdate} />

            <TextInput
              name="name"
              label="Name2"
              cname="name2"
              value={partner!.name}
              onChange={this.onUpdate} />

            <TextInput
              name="name"
              label="Name3"
              cname="name3"
              value={partner!.name}
              onChange={this.onUpdate} />

          </fieldset>
          <fieldset>
            <legend>Engagement Details</legend>
            <TextInput
              name="name"
              label="Name"
              cname="name"
              value={partner!.name}
              onChange={this.onUpdate} />

            <TextInput
              name="name"
              label="Name1"
              cname="name1"
              value={partner!.name}
              onChange={this.onUpdate} />

            <TextInput
              name="name"
              label="Name2"
              cname="name2"
              value={partner!.name}
              onChange={this.onUpdate} />

            <TextInput
              name="name"
              label="Name3"
              cname="name3"
              value={partner!.name}
              onChange={this.onUpdate} />

            <TextInput
              name="name"
              label="Name4"
              cname="name4"
              value={partner!.name}
              onChange={this.onUpdate} />

            <SelectInput
              name="country"
              label="Country"
              cname="Dropdown2"
              value={partner!.country.key}
              defaultOption="Select a Country"
              options={this.props.countries}
              onChange={this.onUpdateCountry} />

          </fieldset>
        </div>

        <hr />
        <div className="modal-footer">
          <div>
            <DefaultButton
              primary={true}
              disabled={false}
              className="saveBtn"
              data-automation-id="save"
              text="Save"
              onClick={this.onSave}
              allowDisabledFocus={true}
            />
          </div>
        </div>
      </Modal>
    );
  }
}


export default PartnerDetail;
