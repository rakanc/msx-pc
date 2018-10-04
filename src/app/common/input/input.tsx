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
  cname?: string;
  onChange?: (event: any) => void;
};

const TextInput: React.SFC<IInputProps> = ({ name, label, cname, placeholder, value, error, required, onChange }: IInputProps) => {

  const cn = cname ? `${cname}` : "TextField";

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
        className={cn}
      />
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
  required: true
}

export default TextInput;
