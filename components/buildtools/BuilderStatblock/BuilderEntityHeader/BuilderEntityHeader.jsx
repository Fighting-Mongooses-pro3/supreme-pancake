import React from "react";
import { BuilderInput, useBuilderContext } from "../../";

export const BuilderEntityHeader = (props) => {
  const { customCss } = props;
  const {
    name,
    updateName,
    size,
    updateSize,
    type,
    updateType,
    subtype,
    updateSubtype,
    alignment,
    updateAlignment,
  } = useBuilderContext();
  return (
    <div className={`ae-border ${customCss}`}>
      <BuilderInput
        inputClasses="font-semibold bg-transparent text-red-600 text-3xl font-mono"
        label={"Name"}
        value={name}
        placeholder="name"
        onChange={updateName}
      />
      <div className="flex flex-wrap gap-x-1">
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Size"}
          value={size}
          placeholder="Size"
          onChange={updateSize}
        />
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Type"}
          value={type}
          placeholder="Type"
          onChange={updateType}
        />
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Subtype"}
          value={subtype}
          placeholder="Subtype"
          onChange={updateSubtype}
        />
        <BuilderInput
          inputClasses="text-black text-sm font-serif"
          label={"Alignment"}
          value={alignment}
          placeholder="Alignment"
          onChange={updateAlignment}
        />
      </div>
    </div>
  );
};
