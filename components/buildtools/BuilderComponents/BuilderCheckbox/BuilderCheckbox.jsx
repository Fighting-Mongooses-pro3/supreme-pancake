import React, { useState } from "react";

export const BuilderCheckbox = (props) => {
  const {
    onChange,
    inputClasses,
    labelClasses,
    containerClasses,
    checked,
    label,
    id = label
      ? label.toLowerCase() + Math.random() * 10000
      : Math.random() * 10000,
  } = props;

  return (
    <div className={containerClasses}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type="checkbox"
        id={id}
        checked={checked}
        className={inputClasses}
        onChange={(e) => onChange(e.target.checked)}
        required
      />
    </div>
  );
};
