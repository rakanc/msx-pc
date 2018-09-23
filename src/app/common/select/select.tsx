import * as React from 'react';
interface ISelectProps {
  name: string;
  label: string;
  defaultOption: string;
  options: any;
  value?: string;
  error?: string;
  onChange(): void;
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
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectInput;
