import React, { useState } from "react";

export const BuilderTextArea = (props) => {
  const {
    onChange,
    inputClasses,
    labelClasses,
    containerClasses,
    value,
    label,
    id = label
      ? label.toLowerCase() + Math.random() * 10000
      : Math.random() * 10000,
    placeholder,
  } = props;

  return (
    <div className={containerClasses}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={inputClasses}
        value={value}
        placeholder={placeholder ?? "Placeholder Text..."}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};
