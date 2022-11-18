import React, { useState } from "react";

export default function FormField(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <label className="fs-5">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
        className="my-3 form-input form-control p-3"
      />
      <span className="error-span">{errorMessage}</span>
    </div>
  );
}
