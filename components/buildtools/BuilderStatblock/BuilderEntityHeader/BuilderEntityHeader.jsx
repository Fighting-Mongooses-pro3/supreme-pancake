import React from "react";
import { BuilderTextField } from "../../BuilderTextField/BuilderTextField";

export const BuilderEntityHeader = (props) => {
  const { name, size, type, subtype, alignment, customCss } = props;
  return (
    <div className={`ae-border ${customCss}`}>
      <BuilderTextField
        weight="semibold"
        background="transparent"
        color="red-600"
        size="3xl"
        font="mono"
        text={name}
      />
      {/* <h1 className="text-red-600 font-mono text-3xl cursor-cell ml-2">
        {name}
      </h1> */}
      <p className="text-black font-serif text-sm cursor-cell ml-2">
        {size} {type} {(size || type) && (subtype || alignment) ? "," : ""}{" "}
        {subtype ? "," + subtype : null} {alignment}
      </p>
    </div>
  );
};
