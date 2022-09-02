import React from "react";
import { BuilderContextProvider } from "../BuilderContext/BuilderContext";
import { BuilderStatblock } from "../BuilderStatblock/BuilderStatblock";

export const EntityBuilder = () => {
  return (
    <div>
      <BuilderContextProvider
        name="Monster"
        size="Medium"
        type="humanoid"
        alignment="true neutral"
        ac="10"
        hp="22"
        hit_dice="5d8"
        speed={{ walk: 30 }}
        strength="1"
        dexterity="17"
        constitution="13"
        intelligence="11"
        wisdom="13"
        charisma="17"
        senses="passive Perception 10"
        lang="----"
        challenge="1/4"
      >
        <BuilderStatblock
          senses="passive Perception 10"
          lang="----"
          challenge="1/4"
        />
      </BuilderContextProvider>
    </div>
  );
};
