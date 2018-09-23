import * as React from 'react';
interface IInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange(): void;
};

const TextInput: React.SFC<IInputProps> = ({ name, label, type, placeholder, value, error, onChange }: IInputProps) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.defaultProps = {
  type: "text"
}

export default TextInput;
