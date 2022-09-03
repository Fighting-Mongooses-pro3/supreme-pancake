import React from "react";
import { abilityModifierCalculation } from "../../../utils/DnDMath";
import { useBuilderContext } from "../../BuilderContext/BuilderContext";
import { BuilderDerivedValueInput } from "../../BuilderComponents/BuilderDerivedValueInput/BuilderDerivedValueInput";

export const BuilderEntityAbilityScoreRow = () => {
  const {
    strength,
    updateStrength,
    dexterity,
    updateDexterity,
    constitution,
    updateConstitution,
    intelligence,
    updateIntelligence,
    wisdom,
    updateWisdom,
    charisma,
    updateCharisma,
  } = useBuilderContext();

  return (
    <div className="flex flex-wrap justify-around">
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
    </div>
  );
};
