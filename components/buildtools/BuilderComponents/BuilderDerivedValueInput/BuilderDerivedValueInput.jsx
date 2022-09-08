import React from "react";
import { BuilderInput } from "../../";

export const BuilderDerivedValueInput = (props) => {
  const {
    inputClasses,
    labelClasses,
    containerClasses,
    value = "",
    label,
    placeholder,
    valueCalculationFunction,
    onChange,
  } = props;

  return (
    <div className={containerClasses}>
      <label className={labelClasses} htmlFor={label}>
        {label}
      </label>
      <div>
        <BuilderInput
          id={label}
          value={value}
          placeholder={placeholder}
          inputClasses={inputClasses}
          containerClasses="inline"
          onChange={onChange}
        />
        <span>{`(${valueCalculationFunction(value)})`}</span>
      </div>
    </div>
  );
};
