import React, { useState } from "react";

interface Props {
  required?: boolean;
  type: string;
  prompt: string;
  label: string;
  name: string;
  value: string;
  error?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validator?: (e: string) => string;
}

export function InputField(props: Props) {
  const [err, setErr] = useState("");

  return (
    <div>
      <label className="input_label">{props.label}</label>

      <input
        required={props.required}
        type={props.type}
        className={`base_input_form ${
          props.error || err ? "border-red-600 " : ""
        }`}
        placeholder={props.prompt}
        name={props.name}
        onBlur={() => {
          if (props.validator) {
            setErr(props.validator(props.value));
          }
        }}
        value={props.value}
        onChange={props.handleChange}
      />

      {(props.error || err) && (
        <span className="error">{props.error || err}</span>
      )}
    </div>
  );
}

export default InputField;
