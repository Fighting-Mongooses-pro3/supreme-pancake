import React from "react";
import { MonsterBuilder } from "../monsterbuilder/MonsterBuilder";
import { NPCBuilder } from "../NPCBuilder/NPCBuilder";

export const BuildTools = (props) => {
  return (
    <div className="h-96 w-full bg-lime-600">
      STUFF
      {props.children}
    </div>
  );
};
