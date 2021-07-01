import React from "react";
import "./form-input.styles.scss";

const FormInput: React.FC<{
  name?: string;
  value?: string;
  onChange: any;
  required?: boolean;
  label: string;
  type?: string;
}> = ({ name, value, onChange, type, required, label }) => {
  return (
    <div className="input-container">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
      />
      <label className={`${value?.length ? "shrink" : ""} form-input-label `}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
