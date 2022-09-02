import React from "react";
import { useBuilderContext } from "../../BuilderContext/BuilderContext";
import { BuilderDerivedValueInput } from "./BuilderDerivedValueInput";

export const BuilderEntityAbilityScoreRow = (props) => {
  const {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    setStrength,
    setDexterity,
    setConstitution,
    setIntelligence,
    setWisdom,
    setCharisma,
  } = useBuilderContext();

  const abilityModifierCalculation = (abilityScore) => {
    return Math.ceil((abilityScore - 1) / 2 - 5);
  };

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
        onChange={setStrength}
      />
      <BuilderDerivedValueInput
        label="DEX"
        value={dexterity}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
        onChange={setDexterity}
      />
      <BuilderDerivedValueInput
        label="CON"
        value={constitution}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
        onChange={setConstitution}
      />
      <BuilderDerivedValueInput
        label="INT"
        value={intelligence}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
        onChange={setIntelligence}
      />
      <BuilderDerivedValueInput
        label="WIS"
        value={wisdom}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
        onChange={setWisdom}
      />
      <BuilderDerivedValueInput
        label="CHA"
        value={charisma}
        placeholder="0"
        containerClasses="flex flex-col items-center max-w-[55px]"
        inputClasses="w-full"
        labelClasses="font-bold"
        valueCalculationFunction={abilityModifierCalculation}
        onChange={setCharisma}
      />
    </div>
  );
};
