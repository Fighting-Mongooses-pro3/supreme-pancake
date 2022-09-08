import React, { useState } from "react";

export const BuilderInput = (props) => {
  const {
    onChange,
    inputClasses,
    labelClasses,
    containerClasses,
    value,
    label,
    placeholder,
  } = props;

  return (
    <div className={containerClasses}>
      {label && (
        <label className={labelClasses} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        type="text"
        id={label}
        className={inputClasses}
        value={value}
        placeholder={placeholder ?? "Placeholder Text..."}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};
