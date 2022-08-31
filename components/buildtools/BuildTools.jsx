import React from "react";
import { useContext } from "react";
import { BuildContext } from "../buildcontext/BuildContext";
import { MonsterBuilder } from "../monsterbuilder/MonsterBuilder";
import { NPCBuilder } from "../NPCBuilder/NPCBuilder";

export const BuildTools = () => {
  const [build, setBuild] = useContext(BuildContext);

  const updateMonsters = (monsters) => {
    console.log("Before");
    console.log(build);
    // Update the monsters field to the new monsters

    // Pseudocode
    console.log("Build Tools updating");
    console.log(monsters);
    build.monsters = monsters;

    setBuild(build);
    console.log("After");
    console.log(build);
  };

  const updateNpcs = (npcs) => {
    // Update the npcs field to the new npcs
    setBuild();
  };

  return (
    <div className="bg-red-500">
      <p>Build Tools</p>
      <MonsterBuilder updateMonsters={updateMonsters} />
      {/* <NPCBuilder /> */}
    </div>
  );
};
