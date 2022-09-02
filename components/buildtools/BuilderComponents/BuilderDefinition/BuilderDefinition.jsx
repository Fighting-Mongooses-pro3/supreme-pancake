import React from "react";
import { BuilderTextField } from "../BuilderTextField/BuilderTextField";

export const BuilderDefinition = (props) => {
  const { term, definition } = props;
  return (
    <div>
      <div>{term}</div>
      <BuilderTextField placeholder={`${term}...`} text={definition} />
    </div>
  );
};
