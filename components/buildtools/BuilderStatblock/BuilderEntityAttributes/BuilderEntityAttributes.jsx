import React from "react";
import { BuilderInput, useBuilderContext } from "../../";

export const BuilderEntityAttributes = (props) => {
  const {
    armorClass,
    armorDesc,
    hitPoints,
    hitDice,
    speed,
    updateArmorClass,
    updateArmorDesc,
    updateHitPoints,
    updateHitDice,
    updateSpeedComponent,
  } = useBuilderContext();

  return (
    <div className="flex justify-around gap-x-2">
      <div>
        <BuilderInput
          label="Armor Class"
          value={armorClass}
          placeholder="Armor Class"
          onChange={updateArmorClass}
          containerClasses="flex flex-col justify-center items-center"
        />
        <BuilderInput
          label="Armor Description"
          value={armorDesc}
          placeholder="Armor Description"
          onChange={updateArmorDesc}
          containerClasses="flex flex-col justify-center items-center"
        />
      </div>
      <div>
        <BuilderInput
          label="Hit Points"
          value={hitPoints}
          placeholder="Hit Points"
          onChange={updateHitPoints}
          containerClasses="flex flex-col justify-center items-center"
        />
        <BuilderInput
          label="Hit Dice"
          value={hitDice}
          placeholder="Hit Dice"
          onChange={updateHitDice}
          containerClasses="flex flex-col justify-center items-center"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>Speed</div>
        <div className="flex flex-wrap justify-center gap-y-1 gap-x-2">
          <BuilderInput
            label="Walking"
            value={speed.walk}
            placeholder="Walking"
            onChange={(value) => updateSpeedComponent({ walk: value })}
            containerClasses="flex flex-col justify-center items-center"
          />
          <BuilderInput
            label="Swimming"
            value={speed.swim}
            placeholder="Swimming"
            onChange={(value) => updateSpeedComponent({ swim: value })}
            containerClasses="flex flex-col justify-center items-center"
          />
          <BuilderInput
            label="Flying"
            value={speed.fly}
            placeholder="Flying"
            onChange={(value) => updateSpeedComponent({ fly: value })}
            containerClasses="flex flex-col justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
};
