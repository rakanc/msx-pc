import * as React from "react";
import TextInput from "../../../common/input/input";
import SelectInput from "../../../common/select/select";
import { Modal } from "office-ui-fabric-react/lib/Modal";
import "./partner.css";
import { DefaultButton, IButtonProps } from "office-ui-fabric-react/lib/Button";
import { Country } from "../../../types/country";
import { Partner } from "../../../types/partner";
import { IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { Label } from "office-ui-fabric-react/lib/Label";
import DateInput from "../../../common/dateinput/dateinput";

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
class PartnerDetail extends React.Component<
  PartnerDetailProps & IButtonProps,
  PartnerDetailState
  > {
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
    console.log(
      "here is the things updating..." +
      item.key +
      " " +
      item.text +
      " " +
      item.selected
    );
    const partner = Object.assign({}, this.state.partner);
    partner.country = item as Country;
    return this.setState({ partner });
  }

  public redirect() {
    this.props.history.push("/partners");
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
  }
  public closeModal(): void {
    this.setState({ showModal: false });
  }

  public onSelectDate(date: Date) {
    console.log(' Selected Date ' + date.toDateString());
  }
  public onFormatDate(date: Date): string {
    console.log(' Formatted Date ' + date.toDateString());
    return date.toDateString()
  }
  public onParseDateFromString(date: string): Date {
    console.log(' ParseDateFromString Date ' + date);
    return new Date();
  }

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
              onChange={this.onUpdate}
            />
            <TextInput
              name="address"
              label="Account"
              cname="account"
              value={partner!.address}
              onChange={this.onUpdate}
            />
            <SelectInput
              name="country"
              label="Status"
              cname="Dropdown1"
              value={partner!.country.key}
              defaultOption="Select the Status"
              options={this.props.countries}
              onChange={this.onUpdateCountry}
            />
            <SelectInput
              name="country"
              label="Status Reason"
              cname="Dropdown1"
              value={partner!.country.key}
              defaultOption="Select he status Reason"
              options={this.props.countries}
              onChange={this.onUpdateCountry}
            />
            <DateInput
              label="Est. Start Date."
              onSelectDate={this.onSelectDate}
              onFormatDate={this.onFormatDate}
              onParseDateFromString={this.onParseDateFromString}
            />
            <DateInput
              label="Est. Completion Date."
              onSelectDate={this.onSelectDate}
              onFormatDate={this.onFormatDate}
              onParseDateFromString={this.onParseDateFromString}
            />

            <TextInput
              name="name"
              label="Owner"
              cname="name1"
              value={partner!.name}
              onChange={this.onUpdate}
            />
          </fieldset>
          <hr />
          <fieldset>
            <legend>Engagement Details</legend>
            <DateInput
              label="Created On"
              onSelectDate={this.onSelectDate}
              onFormatDate={this.onFormatDate}
              onParseDateFromString={this.onParseDateFromString}
            />

            <SelectInput
              name="country"
              label="Solution Area"
              cname="Dropdown1"
              value={partner!.country.key}
              defaultOption="Select he status Reason"
              options={this.props.countries}
              onChange={this.onUpdateCountry}
            />

            <SelectInput
              name="country"
              label="Work Load"
              cname="Dropdown1"
              value={partner!.country.key}
              defaultOption="Select he status Reason"
              options={this.props.countries}
              onChange={this.onUpdateCountry}
            />

            <SelectInput
              name="country"
              label="Work Load Type"
              cname="Dropdown1"
              value={partner!.country.key}
              defaultOption="Select he status Reason"
              options={this.props.countries}
              onChange={this.onUpdateCountry}
            />

            <TextInput
              name="name"
              label="Created By"
              cname="name1"
              value={partner!.name}
              onChange={this.onUpdate}
            />

            <TextInput
              name="name"
              label="Currency"
              cname="name2"
              value={partner!.name}
              onChange={this.onUpdate}
            />

            <TextInput
              name="name"
              label="Modified By"
              cname="name3"
              value={partner!.name}
              onChange={this.onUpdate}
            />

            <DateInput
              label="Modified On"
              onSelectDate={this.onSelectDate}
              onFormatDate={this.onFormatDate}
              onParseDateFromString={this.onParseDateFromString}
            />


            <TextInput
              name="name"
              label="Originating Opportunity"
              cname="name4"
              value={partner!.name}
              onChange={this.onUpdate}
            />
          </fieldset>
        </div>

        <hr />
        <div className="modal-footer">
          <fieldset>
            <DefaultButton
              primary={true}
              disabled={false}
              data-automation-id="save"
              text="Save & Continue"
              onClick={this.onSave}
              allowDisabledFocus={true}
            />
            &nbsp;&nbsp;&nbsp;
          <DefaultButton
              primary={true}
              disabled={false}
              data-automation-id="save"
              text="Cancel"
              onClick={this.onSave}
              allowDisabledFocus={true}
            />
          </fieldset>
        </div>
      </Modal>
    );
  }
}

export default PartnerDetail;
