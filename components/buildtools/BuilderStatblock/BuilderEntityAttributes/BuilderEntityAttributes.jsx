import React from "react";
import { BuilderInput } from "../../BuilderComponents/BuilderInput/BuilderInput";
import { useBuilderContext } from "../../BuilderContext/BuilderContext";

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
    <div>
      <div>
        <BuilderInput
          label="Armor Class"
          value={armorClass}
          placeholder="Armor Class"
          onChange={updateArmorClass}
        />
        <BuilderInput
          label="Armor Description"
          value={armorDesc}
          placeholder="Armor Description"
          onChange={updateArmorDesc}
        />
      </div>
      <div>
        <BuilderInput
          label="Hit Points"
          value={hitPoints}
          placeholder="Hit Points"
          onChange={updateHitPoints}
        />
        <BuilderInput
          label="Hit Dice"
          value={hitDice}
          placeholder="Hit Dice"
          onChange={updateHitDice}
        />
      </div>
      <div>
        <div>Speed</div>
        <div className="flex flex-wrap gap-x-2">
          <BuilderInput
            label="Walking"
            value={speed.walk}
            placeholder="Walking"
            onChange={(value) => updateSpeedComponent({ walk: value })}
          />
          <BuilderInput
            label="Swimming"
            value={speed.swim}
            placeholder="Swimming"
            onChange={(value) => updateSpeedComponent({ swim: value })}
          />
          <BuilderInput
            label="Flying"
            value={speed.fly}
            placeholder="Flying"
            onChange={(value) => updateSpeedComponent({ fly: value })}
          />
        </div>
      </div>
    </div>
  );
};
