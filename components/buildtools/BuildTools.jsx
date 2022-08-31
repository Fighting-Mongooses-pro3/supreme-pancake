import React from "react";
import { MonsterBuilder } from "../monsterbuilder/MonsterBuilder";
import { NPCBuilder } from "../NPCBuilder/NPCBuilder";

export const BuildTools = () => {
  return (
    <div className="bg-red-500">
      <MonsterBuilder />
      <NPCBuilder />
    </div>
  );
};
