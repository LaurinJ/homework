import React from "react";

interface Props {
  require?: boolean;
  type: string;
  prompt: string;
  name: string;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField(props: any) {
  return (
    <div>
      <label className="input_label">{props.label}</label>

      <input
        required={props.required}
        type={props.type}
        className={`base_input_form ${props.error ? "border-red-600 " : ""}`}
        placeholder={props.prompt}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />

      {props.error && <span className="error">{props.error}</span>}
    </div>
  );
}

export default InputField;
