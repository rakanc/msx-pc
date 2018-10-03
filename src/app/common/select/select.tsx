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
  cname?: string;
  onChange?: (event: any) => void;
};

const SelectInput: React.SFC<ISelectProps> = ({ label, cname, defaultOption, options, value, error, onChange }: ISelectProps) => {
  const cn = cname ? `${cname}` : "Dropdown";
  return (
    <div className={cn}>
      <Dropdown
        label={label}
        defaultSelectedKey={value}
        onChange={onChange}
        placeHolder="Select an Option"
        options={options}
        errorMessage={error}
      />
    </div>
  );
};

export default SelectInput;
