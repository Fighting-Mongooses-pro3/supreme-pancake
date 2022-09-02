import React from "react";
import { BuilderContextProvider } from "../BuilderContext/BuilderContext";
import { BuilderStatblock } from "../BuilderStatblock/BuilderStatblock";

export const EntityBuilder = () => {
  return (
    <div>
      {/* <BuilderContextProvider> */}
      <BuilderStatblock
        name="Monster"
        size="Medium"
        type="humanoid"
        alignment="true neutral"
        ac="10"
        hp="22"
        hit_dice="5d8"
        speed="30 ft."
        strength="1"
        dex="17 (+0)"
        con="13 (+0)"
        int="11 (+0)"
        wis="13 (+0)"
        cha="17 (+0)"
        senses="passive Perception 10"
        lang="----"
        challenge="1/4"
      />
      {/* </BuilderContextProvider> */}
    </div>
  );
};
