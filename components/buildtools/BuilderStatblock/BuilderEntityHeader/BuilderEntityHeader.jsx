import React from "react";
import { BuilderInput } from "../../BuilderComponents/BuilderInput/BuilderInput";

export const BuilderEntityHeader = (props) => {
  const { name, size, type, subtype, alignment, customCss } = props;
  return (
    <div className={`ae-border ${customCss}`}>
      <BuilderInput
        inputClasses="font-semibold bg-transparent text-red-600 text-3xl font-mono"
        label={"Name"}
        value={name}
        placeholder="name"
      />
      <div className="flex flex-wrap gap-x-1">
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Size"}
          value={size}
          placeholder="Size"
        />
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Type"}
          value={type}
          placeholder="Type"
        />
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Subtype"}
          value={subtype}
          placeholder="Subtype"
        />
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Alignment"}
          value={alignment}
          placeholder="Alignment"
        />
      </div>
    </div>
  );
};
