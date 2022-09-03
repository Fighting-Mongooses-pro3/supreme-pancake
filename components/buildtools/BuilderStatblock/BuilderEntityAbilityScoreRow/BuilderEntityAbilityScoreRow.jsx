import React from "react";
import { abilityModifierCalculation } from "../../../utils/DnDMath";
import { useBuilderContext } from "../../BuilderContext/BuilderContext";
import { BuilderDerivedValueInput } from "../../BuilderComponents/BuilderDerivedValueInput/BuilderDerivedValueInput";
import { BuilderCheckbox } from "../../BuilderComponents/BuilderCheckbox/BuilderCheckbox";

export const BuilderEntityAbilityScoreRow = () => {
  const {
    strength,
    updateStrength,
    strengthProficiency,
    dexterity,
    updateDexterity,
    dexterityProficiency,
    constitution,
    updateConstitution,
    constitutionProficiency,
    intelligence,
    updateIntelligence,
    intelligenceProficiency,
    wisdom,
    updateWisdom,
    wisdomProficiency,
    charisma,
    updateCharisma,
    charismaProficiency,
    updateProficiency,
  } = useBuilderContext();

  return (
    <div className="flex flex-wrap justify-around">
      <div className="flex flex-col">
        <BuilderDerivedValueInput
          label="STR"
          value={strength}
          placeholder="0"
          containerClasses="flex flex-col items-center max-w-[55px]"
          inputClasses="w-full"
          labelClasses="font-bold"
          valueCalculationFunction={abilityModifierCalculation}
          onChange={updateStrength}
        />
        <BuilderCheckbox
          label="Proficient?"
          checked={strengthProficiency}
          onChange={(proficiency) => updateProficiency("strength", proficiency)}
        />
      </div>
      <div>
        <BuilderDerivedValueInput
          label="DEX"
          value={dexterity}
          placeholder="0"
          containerClasses="flex flex-col items-center max-w-[55px]"
          inputClasses="w-full"
          labelClasses="font-bold"
          valueCalculationFunction={abilityModifierCalculation}
          onChange={updateDexterity}
        />
        <BuilderCheckbox
          label="Proficient?"
          checked={dexterityProficiency}
          onChange={(proficiency) =>
            updateProficiency("dexterity", proficiency)
          }
        />
      </div>
      <div>
        <BuilderDerivedValueInput
          label="CON"
          value={constitution}
          placeholder="0"
          containerClasses="flex flex-col items-center max-w-[55px]"
          inputClasses="w-full"
          labelClasses="font-bold"
          valueCalculationFunction={abilityModifierCalculation}
          onChange={updateConstitution}
        />
        <BuilderCheckbox
          label="Proficient?"
          checked={constitutionProficiency}
          onChange={(proficiency) =>
            updateProficiency("constitution", proficiency)
          }
        />
      </div>
      <div>
        <BuilderDerivedValueInput
          label="INT"
          value={intelligence}
          placeholder="0"
          containerClasses="flex flex-col items-center max-w-[55px]"
          inputClasses="w-full"
          labelClasses="font-bold"
          valueCalculationFunction={abilityModifierCalculation}
          onChange={updateIntelligence}
        />
        <BuilderCheckbox
          label="Proficient?"
          checked={intelligenceProficiency}
          onChange={(proficiency) =>
            updateProficiency("intelligence", proficiency)
          }
        />
      </div>
      <div>
        <BuilderDerivedValueInput
          label="WIS"
          value={wisdom}
          placeholder="0"
          containerClasses="flex flex-col items-center max-w-[55px]"
          inputClasses="w-full"
          labelClasses="font-bold"
          valueCalculationFunction={abilityModifierCalculation}
          onChange={updateWisdom}
        />
        <BuilderCheckbox
          label="Proficient?"
          checked={wisdomProficiency}
          onChange={(proficiency) => updateProficiency("wisdom", proficiency)}
        />
      </div>
      <div>
        <BuilderDerivedValueInput
          label="CHA"
          value={charisma}
          placeholder="0"
          containerClasses="flex flex-col items-center max-w-[55px]"
          inputClasses="w-full"
          labelClasses="font-bold"
          valueCalculationFunction={abilityModifierCalculation}
          onChange={updateCharisma}
        />
        <BuilderCheckbox
          label="Proficient?"
          checked={charismaProficiency}
          onChange={(proficiency) => updateProficiency("charisma", proficiency)}
        />
      </div>
    </div>
  );
};
