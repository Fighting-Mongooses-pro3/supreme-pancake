import React from "react";
import { BuilderTextField } from "../../BuilderComponents/BuilderTextField/BuilderTextField";

export const BuilderEntityHeader = (props) => {
  const { name, size, type, subtype, alignment, customCss } = props;
  return (
    <div className={`ae-border ${customCss}`}>
      <BuilderTextField
        inputClasses="font-semibold bg-transparent text-red-600 text-3xl font-mono"
        label={"Name"}
        text={name}
        placeholder="name"
      />
      <div className="flex flex-wrap gap-x-1">
        <BuilderTextField
          inputClasses="text-black text-sm font-serif"
          label={"Size"}
          text={size}
          placeholder="Size"
        />
        <BuilderTextField
          inputClasses="text-black text-sm font-serif"
          label={"Type"}
          text={type}
          placeholder="Type"
        />
        <BuilderTextField
          inputClasses="text-black text-sm font-serif"
          label={"Subtype"}
          text={subtype}
          placeholder="Subtype"
        />
        <BuilderTextField
          inputClasses="text-black text-sm font-serif"
          label={"Alignment"}
          text={alignment}
          placeholder="Alignment"
        />
      </div>
    </div>
  );
};
