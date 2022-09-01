import React, { useState } from "react";

export const BuilderTextField = (props) => {
  const { weight, background, color, size, font } = props;
  const [text, setText] = useState(props.text || "");

  const createClassString = (weight, background, color, size, font) => {
    let result = "";
    if (weight) result += `font-${weight} `;
    if (background) result += `bg-${background} `;
    if (color) result += `text-${color} `;
    if (size) result += `text-${size} `;
    if (font) result += `font-${font}`;

    return result;
  };

  const classString = createClassString(weight, background, color, size, font);

  const handleChange = (e) => {
    setText(e.target.value);

    // Modify context
  };

  return (
    <input
      type="text"
      //   id={label.toLowerCase()}
      className={classString}
      value={text}
      placeholder="Monster Name"
      onChange={handleChange}
      required
    />
  );
};
