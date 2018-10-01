import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import './input.css';
interface IInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  error?: string;
  onChange?: (event: any) => void;
};

const TextInput: React.SFC<IInputProps> = ({ name, label, type, placeholder, value, error, required, onChange }: IInputProps) => {

  return (
    <div className="docs-TextFieldExample">
      <TextField
        label={label}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        errorMessage={error}
      />
    </div>
  );
};

TextInput.defaultProps = {
  type: "text"
}

export default TextInput;
