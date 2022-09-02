import React from "react";
import { BuilderInput } from "../../BuilderComponents/BuilderInput/BuilderInput";

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
      <div className="inline">
        <BuilderInput
          id={label}
          value={value}
          placeholder={placeholder}
          inputClasses={inputClasses}
          containerClasses="inline"
          onChange={onChange}
        />
        <span>{`(${valueCalculationFunction(+value)})`}</span>
      </div>
    </div>
  );
};
