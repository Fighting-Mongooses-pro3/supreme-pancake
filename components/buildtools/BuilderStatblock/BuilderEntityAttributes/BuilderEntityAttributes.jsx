import React from "react";
import { BuilderInput } from "../../BuilderComponents/BuilderInput/BuilderInput";

export const BuilderEntityAttributes = (props) => {
  const { armor_class, armor_desc, hit_points, hit_dice, speed } = props;

  return (
    <div>
      <div>
        <BuilderInput
          label="Armor Class"
          value={armor_class}
          placeholder="Armor Class"
        />
        <BuilderInput
          label="Armor Description"
          value={armor_desc}
          placeholder="Armor Description"
        />
      </div>
      <div>
        <BuilderInput
          label="Hit Points"
          value={hit_points}
          placeholder="Hit Points"
        />
        <BuilderInput
          label="Hit Dice"
          value={hit_dice}
          placeholder="Hit Dice"
        />
      </div>
      <div>
        <div>Speed</div>
        <div className="flex flex-wrap gap-x-2">
          <BuilderInput
            label="Walking"
            value={speed.walk}
            placeholder="Walking"
          />
          <BuilderInput
            label="Swimming"
            value={speed.swim}
            placeholder="Swimming"
          />
          <BuilderInput label="Flying" value={speed.fly} placeholder="Flying" />
        </div>
      </div>
    </div>
  );
};
