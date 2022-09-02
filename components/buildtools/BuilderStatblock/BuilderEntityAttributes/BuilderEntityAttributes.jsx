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
    setArmorClass,
    setArmorDesc,
    setHitPoints,
    setHitDice,
    setSpeedComponent,
  } = useBuilderContext();

  return (
    <div>
      <div>
        <BuilderInput
          label="Armor Class"
          value={armorClass}
          placeholder="Armor Class"
          onChange={setArmorClass}
        />
        <BuilderInput
          label="Armor Description"
          value={armorDesc}
          placeholder="Armor Description"
          onChange={setArmorDesc}
        />
      </div>
      <div>
        <BuilderInput
          label="Hit Points"
          value={hitPoints}
          placeholder="Hit Points"
          onChange={setHitPoints}
        />
        <BuilderInput
          label="Hit Dice"
          value={hitDice}
          placeholder="Hit Dice"
          onChange={setHitDice}
        />
      </div>
      <div>
        <div>Speed</div>
        <div className="flex flex-wrap gap-x-2">
          <BuilderInput
            label="Walking"
            value={speed.walk}
            placeholder="Walking"
            onChange={(value) => setSpeedComponent({ walk: value })}
          />
          <BuilderInput
            label="Swimming"
            value={speed.swim}
            placeholder="Swimming"
            onChange={(value) => setSpeedComponent({ swim: value })}
          />
          <BuilderInput
            label="Flying"
            value={speed.fly}
            placeholder="Flying"
            onChange={(value) => setSpeedComponent({ fly: value })}
          />
        </div>
      </div>
    </div>
  );
};
