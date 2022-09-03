import React from "react";
import { useEffect } from "react";
import {
  challengeProficiencyBonus,
  challengeRatingXpTable,
} from "../../../utils/DnDMath";
import { BuilderDerivedValueInput } from "../../BuilderComponents/BuilderDerivedValueInput/BuilderDerivedValueInput";
import { useBuilderContext } from "../../BuilderContext/BuilderContext";

export const BuilderEntityAbilities = () => {
  const {
    strengthSave,
    dexteritySave,
    constitutionSave,
    intelligenceSave,
    wisdomSave,
    charismaSave,
    perception,
    senses,
    languages,
    challengeRating,
    updateChallengeRating,
    skills,
  } = useBuilderContext();

  const savingThrows = [
    { stat: "Str", modifier: strengthSave },
    { stat: "Dex", modifier: dexteritySave },
    { stat: "Con", modifier: constitutionSave },
    { stat: "Int", modifier: intelligenceSave },
    { stat: "Wis", modifier: wisdomSave },
    { stat: "Cha", modifier: charismaSave },
  ];

  const skillsList = {
    acrobatics: "dexterity",
    animal_handling: "wisdom",
    arcana: "intelligence",
    athletics: "strength",
    deception: "charisma",
    history: "intelligence",
    insight: "wisdom",
    intimidation: "charisma",
    investigation: "intelligence",
    medicine: "wisdom",
    nature: "intelligence",
    perception: "wisdom",
    performance: "charisma",
    persuasion: "charisma",
    religion: "intelligence",
    sleight_of_hand: "dexterity",
    stealth: "dexterity",
    survival: "wisdom",
  };

  const sensesList = ["blindsight", "darkvision", "tremoresense", "truesight"];

  return (
    <div>
      {strengthSave ||
      strengthSave === 0 ||
      dexteritySave ||
      dexteritySave === 0 ||
      constitutionSave ||
      constitutionSave === 0 ||
      intelligenceSave ||
      intelligenceSave === 0 ||
      wisdomSave ||
      wisdomSave === 0 ||
      charismaSave ||
      charismaSave === 0 ? (
        <div>
          <span>Saving Throws</span>
          <span>
            {console.log("Saving throws", savingThrows)}
            {savingThrows
              .filter((e) => e.modifier || e.modifier === 0)
              .map(
                (e) => e.stat + " " + (e.modifier >= 0 ? "+" : "") + e.modifier
              )
              .join(", ")}
          </span>
        </div>
      ) : null}
      <div>
        <span>Senses</span>
      </div>
      <div>
        <span>Languages</span>
      </div>
      <BuilderDerivedValueInput
        label="Challenge"
        value={challengeRating}
        placeholder="0"
        valueCalculationFunction={(rating) =>
          `${challengeRatingXpTable[rating]} XP`
        }
        onChange={updateChallengeRating}
      />
      <div>
        <span>Proficiency Bonus</span>
        <span>{`+${challengeProficiencyBonus(challengeRating)}`}</span>
      </div>
    </div>
  );
};
