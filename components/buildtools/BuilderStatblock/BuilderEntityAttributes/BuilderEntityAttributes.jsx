import React from "react";
import { BuilderDefinition } from "../../BuilderComponents/BuilderDefinition/BuilderDefinition";
import { BuilderTextField } from "../../BuilderComponents/BuilderTextField/BuilderTextField";

export const BuilderEntityAttributes = (props) => {
  const { armor_class, armor_desc, hit_points, hit_dice, speed } = props;

  return (
    <div>
      <div>
        <BuilderTextField
          label="Armor Class"
          text={armor_class}
          placeholder="Armor Class"
        />
        <BuilderTextField
          label="Armor Description"
          text={armor_desc}
          placeholder="Armor Description"
        />
      </div>
      <div>
        <BuilderTextField
          label="Hit Points"
          text={hit_points}
          placeholder="Hit Points"
        />
        <BuilderTextField
          label="Hit Dice"
          text={hit_dice}
          placeholder="Hit Dice"
        />
      </div>
      <div>
        <div>Speed</div>
        <div className="flex flex-wrap gap-x-2">
          <BuilderTextField
            label="Walking"
            text={speed.walk}
            placeholder="Walking"
          />
          <BuilderTextField
            label="Swimming"
            text={speed.swim}
            placeholder="Swimming"
          />
          <BuilderTextField
            label="Flying"
            text={speed.fly}
            placeholder="Flying"
          />
        </div>
      </div>
    </div>
  );
};
