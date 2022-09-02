import React, { useState } from "react";

export const BuilderInput = (props) => {
  const {
    onChange,
    inputClasses,
    labelClasses,
    containerClasses,
    value,
    label,
    id = label ? label.toLowerCase() : Math.random() * 10000,
    placeholder,
  } = props;
  // const [value, setValue] = useState(text);

  // const handleChange = (e) => {
  //   setValue(e.target.value);

  //   // Modify context
  //   if (passedInFunction) callFunction(e.target.value)
  // };

  return (
    <div className={containerClasses}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type="text"
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

// const createClassString = (weight, background, color, size, font) => {
//   let result = "";
//   if (weight) result += `font-${weight} `;
//   if (background) result += `bg-${background} `;
//   if (color) result += `text-${color} `;
//   if (size) result += `text-${size} `;
//   if (font) result += `font-${font}`;

//   return result;
// };

// const classString = createClassString(weight, background, color, size, font);
