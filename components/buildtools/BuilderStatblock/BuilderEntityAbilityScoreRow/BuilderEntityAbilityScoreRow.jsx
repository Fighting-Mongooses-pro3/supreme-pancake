import React from "react";
import { useState } from "react";
import { BuilderDerivedValueInput } from "./BuilderDerivedValueInput";

export const BuilderEntityAbilityScoreRow = (props) => {
  const {
    strength,
    strength_save,
    dexterity,
    dexterity_save,
    constitution,
    constitution_save,
    intelligence,
    intelligence_save,
    wisdom,
    wisdom_save,
    charisma,
    charisma_save,
  } = props;

  const abilityModifierCalculation = (abilityScore) => {
    return Math.ceil((abilityScore - 1) / 2 - 5);
  };

  const [innerStrength, setInnerStrength] = useState(strength);

  return (
    <div className="flex flex-wrap justify-around">
      <BuilderDerivedValueInput
        label="STR"
        value={innerStrength}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
        onChange={setInnerStrength}
      />
      <BuilderDerivedValueInput
        label="DEX"
        value={dexterity}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
      />
      <BuilderDerivedValueInput
        label="CON"
        value={constitution}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
      />
      <BuilderDerivedValueInput
        label="INT"
        value={intelligence}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
      />
      <BuilderDerivedValueInput
        label="WIS"
        value={wisdom}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
      />
      <BuilderDerivedValueInput
        label="CHA"
        value={charisma}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
      />
    </div>
  );
};
