import React from "react";
import { BuilderContextProvider, BuilderStatblock } from "../";

export const EntityBuilder = () => {
  return (
    <div>
      <BuilderContextProvider
        name="Monster"
        size="Medium"
        type="humanoid"
        alignment="true neutral"
        armor_class="10"
        hit_points="22"
        hit_dice="5d8"
        speed={{ walk: 30 }}
        strength="1"
        strength_save="4"
        dexterity="17"
        constitution="13"
        intelligence="11"
        wisdom="13"
        charisma="17"
        senses="blindsight 120 ft., passive Perception 10"
        lang="----"
        challenge_rating="12"
        skills={{ history: 12 }}
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
