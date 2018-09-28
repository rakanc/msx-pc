import * as React from 'react';
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

const SelectInput: React.SFC<ISelectProps> = ({ name, label, defaultOption, options, value, error, onChange }: ISelectProps) => {

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option>
          {options.map((option: any) => {
            return <option key={option.id} value={option.id}>{option.value}</option>;
          })
          }
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectInput;
