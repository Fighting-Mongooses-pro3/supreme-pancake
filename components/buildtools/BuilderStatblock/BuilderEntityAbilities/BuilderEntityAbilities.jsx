import React from "react";
import { useEffect, useState } from "react";
import {
  challengeProficiencyBonus,
  challengeRatingXpTable,
  abilityModifierCalculation,
} from "../../../utils/DnDMath";
import { BuilderDerivedValueInput } from "../../BuilderComponents/BuilderDerivedValueInput/BuilderDerivedValueInput";
import { useBuilderContext } from "../../BuilderContext/BuilderContext";
import { capitalizeString } from "../../../utils/Strings";

// const

export const BuilderEntityAbilities = () => {
  const {
    strength,
    dexterity,
    intelligence,
    wisdom,
    charisma,

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
    updateSkill,
    removeSkill,
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
    acrobatics: dexterity,
    animal_handling: wisdom,
    arcana: intelligence,
    athletics: strength,
    deception: charisma,
    history: intelligence,
    insight: wisdom,
    intimidation: charisma,
    investigation: intelligence,
    medicine: wisdom,
    nature: intelligence,
    perception: wisdom,
    performance: charisma,
    persuasion: charisma,
    religion: intelligence,
    sleight_of_hand: dexterity,
    stealth: dexterity,
    survival: wisdom,
  };

  const sensesList = ["blindsight", "darkvision", "tremoresense", "truesight"];

  const [selectedSkill, setSelectedSkill] = useState("");

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
        <span>Skills</span>
        <div>
          <select onChange={(e) => setSelectedSkill(e.value)}>
            {Object.entries(skillsList)
              .filter(([k, v]) => !skills.hasOwnProperty(k))
              .map(([k, v]) => (
                <option key={"skill-select-" + k} value={k}>
                  {capitalizeString(k)}
                </option>
              ))}
          </select>
          {/* <button onClick={() => updateSkill({}[selectedSkill] = )}>Add Skill</button> */}
        </div>
        {Object.entries(skills)?.map(([k, v]) => (
          <div key={k}>
            <span>
              {capitalizeString(k) +
                " " +
                (challengeProficiencyBonus(challengeRating) +
                  abilityModifierCalculation(skillsList[k]) >=
                0
                  ? "+"
                  : "") +
                (challengeProficiencyBonus(challengeRating) +
                  abilityModifierCalculation(skillsList[k]))}
            </span>
            <button
              onClick={(e) => removeSkill(e.target.dataset.skillName)}
              data-skill-name={k}
            >
              x
            </button>
          </div>
        ))}
      </div>
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
