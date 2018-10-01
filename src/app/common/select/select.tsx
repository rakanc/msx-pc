import * as React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import './select.css';

interface ISelectProps {
  name: string;
  label: string;
  defaultOption: any;
  options: any;
  value?: string;
  error?: string;
  onChange?: (event: any) => void;
};

const SelectInput: React.SFC<ISelectProps> = ({ label, defaultOption, options, value, error, onChange }: ISelectProps) => {
  return (
    <Dropdown
          label={label}
          defaultSelectedKey = {value}
          onChanged={onChange}
          placeHolder="Select an Option"
          options={options}
          errorMessage={error}
        />
  );
};

export default SelectInput;
