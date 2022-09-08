import React, { useState } from "react";

export const BuilderCheckbox = (props) => {
  const {
    onChange,
    inputClasses,
    labelClasses,
    containerClasses,
    checked,
    label,
  } = props;

  return (
    <div className={containerClasses}>
      {label && (
        <label className={labelClasses} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        type="checkbox"
        label={label}
        checked={checked}
        className={inputClasses}
        onChange={(e) => onChange(e.target.checked)}
        required
      />
    </div>
  );
};
