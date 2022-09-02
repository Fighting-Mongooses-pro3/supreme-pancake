import React from "react";
import { BuilderTextField } from "../../BuilderComponents/BuilderTextField/BuilderTextField";

export const BuilderDerivedValueTextField = (props) => {
  const {
    inputClasses,
    labelClasses,
    containerClasses,
    text = "",
    label,
    placeholder,
  } = props;

  return (
    <div className={containerClasses}>
      <label className={labelClasses} htmlFor={label}>
        {label}
      </label>
      <div>
        <BuilderTextField
          id={label}
          text={text}
          placeholder={placeholder}
          inputClasses={inputClasses}
        />
      </div>
    </div>
  );
};
