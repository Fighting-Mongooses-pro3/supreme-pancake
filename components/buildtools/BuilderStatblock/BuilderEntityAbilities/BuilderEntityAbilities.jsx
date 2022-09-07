import React, { useState } from "react";
import {
  abilityModifierCalculation,
  challengeProficiencyBonus,
  challengeRatingXpTable,
  skillModifierCalculation,
  capitalizeString,
} from "../../../";
import {
  BuilderDerivedValueInput,
  useBuilderContext,
  BuilderInput,
} from "../../";
import { BuilderSelect } from "../../BuilderComponents/BuilderSelect/BuilderSelect";

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
    updateSense,
    removeSense,

    languages,
    updateLanguage,
    removeLanguage,

    challengeRating,
    updateChallengeRating,

    skills,
    updateSkill,
    removeSkill,

    damageVulnerabilities,
    updateDamageVulnerabilities,
    damageResistances,
    updateDamageResistances,
    damageImmunities,
    updateDamageImmunities,

    conditionImmunities,
    addConditionImmunity,
    removeConditionImmunity,
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

  const conditionsList = [
    "blinded",
    "charmed",
    "deafened",
    "frightened",
    "grappled",
    "incapacitated",
    "invisible",
    "paralyzed",
    "petrified",
    "poisoned",
    "prone",
    "restrained",
    "stunned",
    "unconscious",
    "exhaustion",
  ];

  return (
    <div>
      {/* Saving Throws Block */}
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
            {savingThrows
              .filter((e) => e.modifier || e.modifier === 0)
              .map(
                (e) => e.stat + " " + (e.modifier >= 0 ? "+" : "") + e.modifier
              )
              .join(", ")}
          </span>
        </div>
      ) : null}

      {/* Skills Block */}
      <div>
        <span>Skills</span>
        <BuilderSelect
          promptText="Select a skill"
          itemsList={Object.keys(skillsList).filter(
            (k) => !skills.hasOwnProperty(k)
          )}
          displayFunction={(skill) =>
            skill
              .split("_")
              .map((str) => capitalizeString(str))
              .join(" ")
          }
          addButtonText="Add skill"
          onButtonClick={(skill) => {
            updateSkill({
              [skill]: skillModifierCalculation(
                challengeRating,
                skillsList[skill]
              ),
            });
          }}
        />

        {Object.entries(skills).map(([k, v]) => (
          <div key={k}>
            <span>
              {k
                .split("_")
                .map((str) => capitalizeString(str))
                .join(" ") +
                " " +
                (skillModifierCalculation(challengeRating, skillsList[k]) >= 0
                  ? "+"
                  : "") +
                skillModifierCalculation(challengeRating, skillsList[k])}
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

      {/* Resistances and Immunities */}
      <BuilderInput
        label="Damage Vulnerabilities"
        value={damageVulnerabilities}
        onChange={(value) => updateDamageVulnerabilities(value)}
      />
      <BuilderInput
        label="Damage Resistances"
        value={damageResistances}
        onChange={(value) => updateDamageResistances(value)}
      />
      <BuilderInput
        label="Damage Immunities"
        value={damageImmunities}
        onChange={(value) => updateDamageImmunities(value)}
      />

      <div>
        <BuilderSelect
          promptText="Select a condition"
          itemsList={conditionsList.filter(
            (k) => !conditionImmunities.hasOwnProperty(k)
          )}
          displayFunction={(condition) => capitalizeString(condition)}
          addButtonText="Add Condition"
          onButtonClick={(condition) => {
            addConditionImmunity(condition);
          }}
        />
        <div>
          {Object.keys(conditionImmunities).map((condition) => (
            <div key={condition}>
              <span>{capitalizeString(condition)}</span>
              <button
                onClick={(e) =>
                  removeConditionImmunity(e.target.dataset.conditionName)
                }
                data-condition-name={condition}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Senses Block */}
      <div>
        <span>Senses</span>
        <div>
          <button onClick={() => updateSense("", senses.length)}>
            Add Sense
          </button>
          {/* Passive perception */}
          <div>
            passive Perception{" "}
            {10 +
              (skills?.perception
                ? skillModifierCalculation(challengeRating, wisdom)
                : abilityModifierCalculation(wisdom))}
          </div>
          {senses.map((sense, index) => (
            <div key={"sense-" + index} className="flex">
              <BuilderInput
                value={sense}
                data-set-index={index}
                onChange={(value) => {
                  updateSense(value, index);
                }}
              />
              <button
                data-index={index}
                onClick={(e) => removeSense(e.target.dataset.index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Block */}
      <div>
        <span>Languages</span>
        <div>
          <button onClick={() => updateLanguage("", languages.length)}>
            Add Language
          </button>
          {languages.map((language, index) => (
            <div key={"language-" + index} className="flex">
              <BuilderInput
                value={language}
                data-set-index={index}
                onChange={(value) => {
                  updateLanguage(value, index);
                }}
              />
              <button
                data-index={index}
                onClick={(e) => removeLanguage(e.target.dataset.index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
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
