import React from "react";
import { BuilderInput } from "../../BuilderComponents/BuilderInput/BuilderInput";
import { useBuilderContext } from "../../BuilderContext/BuilderContext";

export const BuilderEntityHeader = (props) => {
  const { customCss } = props;
  const {
    name,
    setName,
    size,
    setSize,
    type,
    setType,
    subtype,
    setSubtype,
    alignment,
    setAlignment,
  } = useBuilderContext();
  return (
    <div className={`ae-border ${customCss}`}>
      <BuilderInput
        inputClasses="font-semibold bg-transparent text-red-600 text-3xl font-mono"
        label={"Name"}
        value={name}
        placeholder="name"
        onChange={setName}
      />
      <div className="flex flex-wrap gap-x-1">
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Size"}
          value={size}
          placeholder="Size"
          onChange={setSize}
        />
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Type"}
          value={type}
          placeholder="Type"
          onChange={setType}
        />
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Subtype"}
          value={subtype}
          placeholder="Subtype"
          onChange={setSubtype}
        />
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Alignment"}
          value={alignment}
          placeholder="Alignment"
          onChange={setAlignment}
        />
      </div>
    </div>
  );
};
